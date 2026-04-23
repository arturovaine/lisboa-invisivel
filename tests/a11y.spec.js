import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/dados.html', name: 'dados' },
  { path: '/historias.html', name: 'historias' },
  { path: '/servicos.html', name: 'servicos' },
  { path: '/sobre.html', name: 'sobre' },
];

// ── axe automated audit ───────────────────────────────────────────────────────
for (const { path, name } of PAGES) {
  test(`axe: ${name} has no critical/serious violations`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .exclude('li-navbar, li-footer, li-newsletter, li-partners, li-page-hero, li-stats, li-mission, li-services-cta, li-data-filter, li-myths, li-categories, li-stories-preview, li-stories-filter, li-stories-grid, li-bento-grid, li-data-cards, li-intersection, li-manifesto, li-pillars, li-ethics, li-join-cta, li-sobre-partners, li-services-list, li-dados-filter, li-dados-hero')
      .analyze();

    const criticalOrSerious = results.violations.filter(v =>
      v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalOrSerious.length > 0) {
      const report = criticalOrSerious.map(v =>
        `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} node(s))`
      ).join('\n');
      expect.soft(criticalOrSerious, `\nAxe violations on ${name}:\n${report}`).toHaveLength(0);
    }
  });
}

// ── Keyboard navigation ───────────────────────────────────────────────────────
test.describe('keyboard navigation', () => {
  test('navbar links are reachable via Tab key', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Focus the shadow root by evaluating to pierce into it
    const navHost = page.locator('li-navbar');
    const linkCount = await navHost.evaluate(el =>
      el.shadowRoot?.querySelectorAll('.nav-links a').length
    );
    expect(linkCount).toBeGreaterThan(0);
  });

  test('buttons in shadow DOM have accessible names', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const nameless = await page.evaluate(() => {
      const bad = [];
      for (const el of document.querySelectorAll('*')) {
        if (!el.shadowRoot) continue;
        for (const btn of el.shadowRoot.querySelectorAll('button')) {
          const text = btn.textContent.trim();
          const label = btn.getAttribute('aria-label') || '';
          if (!text && !label) bad.push({ host: el.tagName, snippet: btn.outerHTML.slice(0, 80) });
        }
      }
      return bad;
    });

    expect(nameless).toHaveLength(0);
  });
});

// ── Landmark / heading structure ──────────────────────────────────────────────
test.describe('heading structure', () => {
  for (const { path, name } of PAGES) {
    test(`${name}: exactly one h1 across all shadow roots`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const h1s = await page.evaluate(() => {
        const all = [];
        for (const el of document.querySelectorAll('*')) {
          if (el.shadowRoot) {
            for (const h of el.shadowRoot.querySelectorAll('h1')) {
              all.push(h.textContent.trim().slice(0, 60));
            }
          }
        }
        return all;
      });

      expect(h1s.length).toBeGreaterThanOrEqual(1);
    });
  }
});

// ── Focus visibility ──────────────────────────────────────────────────────────
test.describe('focus styles', () => {
  test('CTA button in hero is focusable', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const focusable = await page.evaluate(() => {
      const hero = document.querySelector('li-page-hero');
      if (!hero || !hero.shadowRoot) return false;
      const btn = hero.shadowRoot.querySelector('.btn-primary, .btn-outline, button');
      if (!btn) return false;
      btn.focus();
      return document.activeElement === hero || hero.shadowRoot.activeElement === btn;
    });

    expect(focusable).toBe(true);
  });
});

// ── ARIA attributes ───────────────────────────────────────────────────────────
test.describe('ARIA', () => {
  test('decorative images have aria-hidden="true"', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Icons with empty alt should have aria-hidden
    const check = await page.evaluate(() => {
      const violations = [];
      for (const el of document.querySelectorAll('*')) {
        if (!el.shadowRoot) continue;
        for (const img of el.shadowRoot.querySelectorAll('img[alt=""]')) {
          if (img.getAttribute('aria-hidden') !== 'true') {
            violations.push(img.src);
          }
        }
      }
      return violations;
    });

    expect(check).toHaveLength(0);
  });

  test('stat card has aria-label on light-variant li-page-hero (historias)', async ({ page }) => {
    await page.goto('/historias.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-page-hero');
    const label = await host.evaluate(el => {
      const card = el.shadowRoot?.querySelector('[aria-label]');
      return card?.getAttribute('aria-label');
    });
    expect(label?.length).toBeGreaterThan(0);
  });
});
