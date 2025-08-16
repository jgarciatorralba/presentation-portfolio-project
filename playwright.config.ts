import { defineConfig, devices } from '@playwright/test';
import { loadEnvFile } from "process";

loadEnvFile(".env.test");

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: process.env.SITE_URL,
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
    env: {
      NODE_ENV: 'test',
      PORT: '3030',
      SITE_URL: process.env.SITE_URL || '',
      API_URL: process.env.API_URL || '',
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
      CACHE_LIFETIME_SECONDS: process.env.CACHE_LIFETIME_SECONDS || '',
      LOG_FILE_PATH: process.env.LOG_FILE_PATH || '',
    }
  },
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 15 Pro'] },
    },
  ],
});
