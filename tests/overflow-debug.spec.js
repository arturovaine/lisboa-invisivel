import { test, expect } from '@playwright/test';

const PAGES = ['/', '/dados.html', '/historias.html', '/servicos.html', '/sobre.html'];

for (const path of PAGES) {
  test(`overflow debug: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const info = await page.evaluate(() => {
      const W = document.documentElement.clientWidth;
      const overflowing = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.right > W + 1 || r.left < -1) {
          overflowing.push({
            tag: el.tagName,
            className: el.className,
            right: Math.round(r.right),
            left: Math.round(r.left),
            width: Math.round(r.width),
            viewport: W,
          });
        }
      }
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        overflowing: overflowing.slice(0, 10),
      };
    });

    console.log(`\n=== ${path} ===`);
    console.log(`scrollWidth: ${info.scrollWidth}, clientWidth: ${info.clientWidth}`);
    for (const el of info.overflowing) {
      console.log(`  <${el.tag} class="${el.className}"> left:${el.left} right:${el.right} (width:${el.width}) viewport:${el.viewport}`);
    }

    expect(info.overflowing.length).toBe(0);
  });
}
