import { test, expect } from '@playwright/test';

test('homepage should have "My test page"', async ({ page }) => {
  await page.goto('/page1');
  await expect(page.getByText('My test page')).toBeVisible();
  await page.pause() // to see the result in headed mode
});
