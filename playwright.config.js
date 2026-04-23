import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:8090',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 5'],
        browserName: 'chromium',
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8090',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
