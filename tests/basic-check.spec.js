import { test, expect } from '@playwright/test';

test('Homepage should load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Maxon/);
});

test('Navigate to products page', async ({ page }) => {
  await page.goto('en/products');
  await expect(page.locator('h1')).toBeVisible();
});
