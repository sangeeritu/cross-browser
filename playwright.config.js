import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: 'html',
  use: {
    headless: false,
    baseURL: 'https://www.maxon.net', 
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      headless: true,
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      headless: true,
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      headless: true,
    },
  ],
});
