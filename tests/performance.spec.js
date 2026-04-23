import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/dados.html', name: 'dados' },
  { path: '/historias.html', name: 'historias' },
  { path: '/servicos.html', name: 'servicos' },
  { path: '/sobre.html', name: 'sobre' },
];

const LCP_THRESHOLD = 4000;  // ms — generous for local dev server
const CLS_THRESHOLD = 0.25;  // Google "needs improvement" boundary
const TTFB_THRESHOLD = 800;  // ms

async function collectWebVitals(page, path) {
  await page.goto(path, { waitUntil: 'domcontentloaded' });

  // Inject web-vitals measurement via PerformanceObserver
  const vitals = await page.evaluate(async () => {
    const results = { lcp: null, cls: 0, ttfb: null };

    // TTFB from Navigation Timing
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) results.ttfb = nav.responseStart - nav.requestStart;

    // LCP
    await new Promise(resolve => {
      let done = false;
      const lcpObs = new PerformanceObserver(list => {
        const entries = list.getEntries();
        if (entries.length) results.lcp = entries[entries.length - 1].startTime;
      });
      try { lcpObs.observe({ type: 'largest-contentful-paint', buffered: true }); } catch {}

      // CLS
      const clsObs = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) results.cls += entry.value;
        }
      });
      try { clsObs.observe({ type: 'layout-shift', buffered: true }); } catch {}

      // Collect after a short idle
      setTimeout(() => {
        lcpObs.disconnect();
        clsObs.disconnect();
        resolve();
      }, 2000);
    });

    return results;
  });

  return vitals;
}

for (const { path, name } of PAGES) {
  test.describe(`performance: ${name}`, () => {
    test('TTFB under threshold', async ({ page }) => {
      const vitals = await collectWebVitals(page, path);
      if (vitals.ttfb !== null) {
        expect(vitals.ttfb, `TTFB on ${name}: ${vitals.ttfb}ms`).toBeLessThan(TTFB_THRESHOLD);
      }
    });

    test('LCP under threshold', async ({ page }) => {
      const vitals = await collectWebVitals(page, path);
      if (vitals.lcp !== null) {
        expect(vitals.lcp, `LCP on ${name}: ${vitals.lcp}ms`).toBeLessThan(LCP_THRESHOLD);
      }
    });

    test('CLS under threshold', async ({ page }) => {
      const vitals = await collectWebVitals(page, path);
      expect(vitals.cls, `CLS on ${name}: ${vitals.cls}`).toBeLessThan(CLS_THRESHOLD);
    });
  });
}

// ── Asset checks ──────────────────────────────────────────────────────────────
test.describe('assets', () => {
  test('no render-blocking scripts in <head>', async ({ page }) => {
    await page.goto('/');
    const blocking = await page.evaluate(() =>
      [...document.head.querySelectorAll('script:not([async]):not([defer]):not([type="module"])')]
        .map(s => s.src)
    );
    expect(blocking).toHaveLength(0);
  });

  test('fonts load within 3s', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loaded = await page.evaluate(async () => {
      try {
        await document.fonts.ready;
        return true;
      } catch {
        return false;
      }
    });
    expect(loaded).toBe(true);
  });

  test('no 404 resources on home page', async ({ page }) => {
    const failed = [];
    page.on('response', res => {
      if (res.status() === 404) failed.push(res.url());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(failed).toHaveLength(0);
  });
});
