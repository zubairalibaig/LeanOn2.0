import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 1,
  // 'github' reporter surfaces failures as GitHub Actions annotations (readable
  // via the API), since raw job logs live in blob storage.
  reporter: process.env.CI
    ? [['list'], ['github'], ['json', { outputFile: 'test-results/results.json' }]]
    : [['list'], ['json', { outputFile: 'test-results/results.json' }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      'x-vercel-protection-bypass': process.env.VERCEL_BYPASS_SECRET || '',
    },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
})
