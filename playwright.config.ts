import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  snapshotPathTemplate: 'src/snapshots/{arg}{ext}',
  timeout: 120_000,
  expect: { timeout: 10_000 },
  reporter: [
    ['html', { 
      outputFolder: 'reports/html',
      open: 'never',
    }], 

    ['junit', { 
      outputFile: 'reports/junit-report/junit-results.xml' 
    }],

    ['allure-playwright', {
      resultsDir: 'reports/allure-report/allure-results',
      suiteTitle: false,
    }],
  ],

  outputDir: 'src/test-results',

  use: {
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
