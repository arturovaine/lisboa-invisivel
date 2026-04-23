import { test, expect } from '@playwright/test';

// ── Nav links ────────────────────────────────────────────────────────────────
test.describe('navigation', () => {
  test('navbar contains core section links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-navbar');
    const hrefs = await host.evaluate(el =>
      [...el.shadowRoot.querySelectorAll('.nav-links a')].map(a => a.getAttribute('href'))
    );
    // .nav-links contains: sobre, dados, historias, blog, participar
    for (const p of ['sobre', 'dados', 'historias']) {
      expect(hrefs.some(h => h?.includes(p)), `Missing nav link to ${p}`).toBe(true);
    }
  });

  test('navbar CTA links to servicos', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-navbar');
    const ctaHref = await host.evaluate(el => {
      const a = el.shadowRoot?.querySelector('a[href*="servicos"]');
      return a?.getAttribute('href');
    });
    expect(ctaHref).toContain('servicos');
  });

  test('footer links are not empty', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-footer');
    const links = await host.evaluate(el =>
      [...el.shadowRoot.querySelectorAll('.col-links a')]
        .map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
    );
    expect(links.length).toBeGreaterThan(0);
    for (const { text } of links) {
      expect(text.length).toBeGreaterThan(0);
    }
  });
});

// ── H1 heading present on every page ────────────────────────────────────────
const PAGES = [
  { path: '/', name: 'home' },
  { path: '/dados.html', name: 'dados' },
  { path: '/historias.html', name: 'historias' },
  { path: '/servicos.html', name: 'servicos' },
  { path: '/sobre.html', name: 'sobre' },
];

for (const { path, name } of PAGES) {
  test(`${name}: h1 is present in shadow DOM`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    const h1 = await page.evaluate(() => {
      for (const el of document.querySelectorAll('*')) {
        if (el.shadowRoot) {
          const h = el.shadowRoot.querySelector('h1');
          if (h) return h.textContent.trim();
        }
      }
      return null;
    });

    expect(h1).not.toBeNull();
    expect(h1?.length).toBeGreaterThan(0);
  });
}

// ── Images accessibility ─────────────────────────────────────────────────────
test.describe('images — alt attributes', () => {
  test('light DOM images all have non-empty alt', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const bad = await page.evaluate(() =>
      [...document.querySelectorAll('img')]
        .filter(img => !img.hasAttribute('alt') || (img.getAttribute('alt') === '' && !img.hasAttribute('aria-hidden')))
        .map(img => img.src)
    );
    expect(bad).toHaveLength(0);
  });

  test('shadow DOM images have alt or aria-hidden', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const bad = await page.evaluate(() => {
      const result = [];
      for (const el of document.querySelectorAll('*')) {
        if (!el.shadowRoot) continue;
        for (const img of el.shadowRoot.querySelectorAll('img')) {
          const hasAlt = img.hasAttribute('alt');
          const isDecorative = img.getAttribute('aria-hidden') === 'true';
          if (!hasAlt && !isDecorative) result.push(img.src);
        }
      }
      return result;
    });
    expect(bad).toHaveLength(0);
  });
});

// ── Key content sections ─────────────────────────────────────────────────────
test.describe('home — key content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('stats section renders stat numbers', async ({ page }) => {
    const host = page.locator('li-stats');
    const nums = await host.evaluate(el =>
      [...el.shadowRoot.querySelectorAll('.num')].map(n => n.textContent.trim())
    );
    expect(nums.length).toBeGreaterThan(0);
    for (const n of nums) expect(n.length).toBeGreaterThan(0);
  });

  test('myths section has the main myth quote', async ({ page }) => {
    const host = page.locator('li-myths');
    const text = await host.evaluate(el =>
      el.shadowRoot?.querySelector('.mt')?.textContent.trim()
    );
    expect(text?.length).toBeGreaterThan(10);
  });

  test('mission section renders mission pillars', async ({ page }) => {
    const host = page.locator('li-mission');
    const pillars = await host.evaluate(el =>
      el.shadowRoot?.querySelectorAll('.pillar').length
    );
    expect(pillars).toBeGreaterThanOrEqual(3);
  });
});

test.describe('dados — key content', () => {
  test('bento grid renders at least 4 stat cards', async ({ page }) => {
    await page.goto('/dados.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-bento-grid');
    const cards = await host.evaluate(el =>
      el.shadowRoot?.querySelectorAll('.card').length
    );
    expect(cards).toBeGreaterThanOrEqual(4);
  });

  test('intersection section is rendered', async ({ page }) => {
    await page.goto('/dados.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-intersection');
    const exists = await host.evaluate(el => !!el.shadowRoot?.querySelector('.grid, .card, section'));
    expect(exists).toBe(true);
  });
});

test.describe('sobre — key content', () => {
  test('manifesto section has h2 and body text', async ({ page }) => {
    await page.goto('/sobre.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-manifesto');
    const content = await host.evaluate(el => ({
      h2: el.shadowRoot?.querySelector('h2')?.textContent.trim(),
      para: el.shadowRoot?.querySelector('p')?.textContent.trim(),
    }));
    expect(content.h2?.length).toBeGreaterThan(0);
    expect(content.para?.length).toBeGreaterThan(0);
  });

  test('pillars section renders 3 principle cards', async ({ page }) => {
    await page.goto('/sobre.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-pillars-of-action');
    const cards = await host.evaluate(el =>
      el.shadowRoot?.querySelectorAll('.card').length
    );
    expect(cards).toBe(3);
  });
});
