import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/', name: 'home', heading: /lisboa invisível/i },
  { path: '/dados.html', name: 'dados', heading: /dados/i },
  { path: '/historias.html', name: 'historias', heading: /histórias/i },
  { path: '/servicos.html', name: 'servicos', heading: /serviço/i },
  { path: '/sobre.html', name: 'sobre', heading: /sobre/i },
];

for (const { path, name, heading } of PAGES) {
  test.describe(name, () => {
    test('loads without network errors', async ({ page }) => {
      const failed = [];
      page.on('response', res => {
        if (res.status() >= 400) failed.push(`${res.status()} ${res.url()}`);
      });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      expect(failed, `Failed requests on ${name}: ${failed.join(', ')}`).toHaveLength(0);
    });

    test('renders navbar and footer', async ({ page }) => {
      await page.goto(path);
      const navbar = page.locator('li-navbar, nav').first();
      await expect(navbar).toBeVisible();
      const footer = page.locator('li-footer, footer').first();
      await expect(footer).toBeVisible();
    });

    test('page title is set', async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
    });

    test('no horizontal overflow at 375px', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(overflow, `Horizontal overflow on ${name} at 375px`).toBe(false);
    });

    test('no horizontal overflow at 1280px', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(overflow, `Horizontal overflow on ${name} at 1280px`).toBe(false);
    });

    test('no uncaught JS errors', async ({ page }) => {
      const errors = [];
      page.on('pageerror', err => errors.push(err.message));
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      expect(errors, `JS errors on ${name}: ${errors.join('; ')}`).toHaveLength(0);
    });
  });
}

test.describe('home interactions', () => {
  test('blur lens follows mouse on hero', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const hero = page.locator('.hero.tall').first();
    if (await hero.count() === 0) return;
    await hero.hover({ position: { x: 200, y: 200 } });
    const lens = page.locator('.blur-lens').first();
    await expect(lens).toBeVisible();
  });

  test('category cards are visible', async ({ page }) => {
    await page.goto('/');
    const cats = page.locator('li-categories').first();
    await expect(cats).toBeVisible();
  });
});

test.describe('servicos interactions', () => {
  test('list/map view toggle switches grid layout', async ({ page }) => {
    await page.goto('/servicos.html');
    await page.waitForLoadState('networkidle');

    const clicked = await page.evaluate(() => {
      const host = document.querySelector('li-services-list');
      if (!host || !host.shadowRoot) return false;
      const btn = [...host.shadowRoot.querySelectorAll('.view-filter')]
        .find(b => b.dataset.view === 'map');
      if (!btn) return false;
      btn.click();
      return true;
    });

    if (!clicked) return;

    await page.waitForTimeout(300);

    const isMapLayout = await page.evaluate(() => {
      const host = document.querySelector('li-services-list');
      if (!host || !host.shadowRoot) return false;
      const inner = host.shadowRoot.querySelector('.inner');
      return inner && inner.style.gridTemplateColumns === '1fr';
    });

    expect(isMapLayout).toBe(true);
  });
});

test.describe('dados interactions', () => {
  test('filter bar is visible', async ({ page }) => {
    await page.goto('/dados.html');
    await page.waitForLoadState('networkidle');
    const filter = page.locator('li-dados-filter, li-data-filter').first();
    await expect(filter).toBeVisible();
  });
});
