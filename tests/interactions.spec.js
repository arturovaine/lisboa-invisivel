import { test, expect } from '@playwright/test';

// Helper to pierce a shadow root and query elements
const shadowQuery = (host, selector) =>
  host.evaluate((el, sel) => {
    const root = el.shadowRoot;
    if (!root) return null;
    const found = root.querySelector(sel);
    return found ? { exists: true, text: found.textContent.trim() } : null;
  }, selector);

const shadowQueryAll = (host, selector) =>
  host.evaluate((el, sel) => {
    const root = el.shadowRoot;
    if (!root) return [];
    return [...root.querySelectorAll(sel)].map(n => ({
      text: n.textContent.trim(),
      className: n.className,
    }));
  }, selector);

// ── Myths accordion ─────────────────────────────────────────────────────────
test.describe('home — myths accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('renders 2 accordion items', async ({ page }) => {
    const host = page.locator('li-myths');
    const items = await shadowQueryAll(host, '.item');
    expect(items.length).toBe(2);
  });

  test('accordion headers are visible and contain myth titles', async ({ page }) => {
    const host = page.locator('li-myths');
    const headers = await shadowQueryAll(host, '.item .h');
    expect(headers[0].text).toContain('Toxicodependência');
    expect(headers[1].text).toContain('Nacionalidade');
  });

  test('accordion bodies start collapsed (max-height:0)', async ({ page }) => {
    const host = page.locator('li-myths');
    const collapsed = await host.evaluate(el => {
      const bodies = [...el.shadowRoot.querySelectorAll('.item .b')];
      return bodies.every(b => {
        const computed = getComputedStyle(b);
        return computed.maxHeight === '0px' || computed.overflow === 'hidden';
      });
    });
    expect(collapsed).toBe(true);
  });
});

// ── Newsletter form ──────────────────────────────────────────────────────────
test.describe('newsletter form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('email input is rendered with correct type', async ({ page }) => {
    const host = page.locator('li-newsletter');
    const type = await host.evaluate(el => {
      const input = el.shadowRoot?.querySelector('input');
      return input?.type;
    });
    expect(type).toBe('email');
  });

  test('subscribe button is visible', async ({ page }) => {
    const host = page.locator('li-newsletter');
    const btn = await host.evaluate(el => {
      const b = el.shadowRoot?.querySelector('.btn-sub');
      return b ? b.textContent.trim() : null;
    });
    expect(btn).toMatch(/subscrever/i);
  });

  test('email input accepts typed text', async ({ page }) => {
    const host = page.locator('li-newsletter');
    await host.evaluate(el => {
      const input = el.shadowRoot?.querySelector('input');
      if (input) input.value = 'test@exemplo.pt';
    });
    const value = await host.evaluate(el =>
      el.shadowRoot?.querySelector('input')?.value
    );
    expect(value).toBe('test@exemplo.pt');
  });
});

// ── Historias filter ─────────────────────────────────────────────────────────
test.describe('historias — category filter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/historias.html');
    await page.waitForLoadState('networkidle');
  });

  test('renders 7 filter tags', async ({ page }) => {
    const host = page.locator('li-stories-filter');
    const tags = await shadowQueryAll(host, '.tag');
    expect(tags.length).toBe(7);
  });

  test('"Todos" starts as active', async ({ page }) => {
    const host = page.locator('li-stories-filter');
    const active = await host.evaluate(el => {
      const btn = el.shadowRoot?.querySelector('.tag.active');
      return btn?.textContent.trim();
    });
    expect(active).toBe('Todos');
  });

  test('clicking a tag makes it active and deactivates others', async ({ page }) => {
    const host = page.locator('li-stories-filter');

    await host.evaluate(el => {
      const tags = [...el.shadowRoot.querySelectorAll('.tag')];
      const habitacao = tags.find(t => t.textContent.includes('Habitação'));
      habitacao?.click();
    });

    const active = await host.evaluate(el => {
      const activeTag = el.shadowRoot?.querySelector('.tag.active');
      const allTags = [...el.shadowRoot.querySelectorAll('.tag')];
      return {
        activeText: activeTag?.textContent.trim(),
        activeCount: allTags.filter(t => t.classList.contains('active')).length,
      };
    });

    expect(active.activeText).toBe('Habitação');
    expect(active.activeCount).toBe(1);
  });

  test('clicking back to "Todos" restores active state', async ({ page }) => {
    const host = page.locator('li-stories-filter');
    await host.evaluate(el => {
      const tags = [...el.shadowRoot.querySelectorAll('.tag')];
      tags.find(t => t.textContent.includes('Emprego'))?.click();
      tags.find(t => t.textContent.includes('Todos'))?.click();
    });
    const active = await host.evaluate(el =>
      el.shadowRoot?.querySelector('.tag.active')?.textContent.trim()
    );
    expect(active).toBe('Todos');
  });
});

// ── Stories grid ─────────────────────────────────────────────────────────────
test.describe('historias — stories grid', () => {
  test('renders feature card and at least 4 small cards', async ({ page }) => {
    await page.goto('/historias.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-stories-grid');
    const counts = await host.evaluate(el => ({
      feature: el.shadowRoot?.querySelectorAll('.card-feature').length,
      small: el.shadowRoot?.querySelectorAll('.card-small').length,
    }));
    expect(counts.feature).toBeGreaterThanOrEqual(1);
    expect(counts.small).toBeGreaterThanOrEqual(4);
  });

  test('feature card has h3 heading with a name', async ({ page }) => {
    await page.goto('/historias.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-stories-grid');
    const heading = await host.evaluate(el =>
      el.shadowRoot?.querySelector('.card-feature h3')?.textContent.trim()
    );
    expect(heading?.length).toBeGreaterThan(0);
  });
});

// ── Categorias home ───────────────────────────────────────────────────────────
test.describe('home — categories', () => {
  test('renders at least 3 category cards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-categories');
    const cards = await host.evaluate(el =>
      el.shadowRoot?.querySelectorAll('.cat-card, .cat, [class*="card"]').length
    );
    expect(cards).toBeGreaterThanOrEqual(3);
  });
});

// ── Servicos list ─────────────────────────────────────────────────────────────
test.describe('servicos — service cards', () => {
  test('renders at least 2 service articles', async ({ page }) => {
    await page.goto('/servicos.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-services-list');
    const count = await host.evaluate(el =>
      el.shadowRoot?.querySelectorAll('article.svc').length
    );
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('emergency panel is visible with a phone number', async ({ page }) => {
    await page.goto('/servicos.html');
    await page.waitForLoadState('networkidle');
    const host = page.locator('li-services-list');
    const tel = await host.evaluate(el =>
      el.shadowRoot?.querySelector('.etel')?.textContent.trim()
    );
    expect(tel?.length).toBeGreaterThan(0);
  });
});
