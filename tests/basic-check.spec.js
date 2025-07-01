import { test, expect } from '@playwright/test';

// Helper function to handle cookie consent
async function clearCookieConsent(page, timeout = 20000) {
  const allowAllButton = page.locator('button', { hasText: 'Allow all' });
  if (await allowAllButton.isVisible({ timeout }).catch(() => false)) {
    await allowAllButton.click({ force: true });
  }
}

test('Homepage should load', async ({ page }) => {
  await page.goto('/');

  // Clear cookie consent if present
  await clearCookieConsent(page);

  await expect(page).toHaveTitle(/Maxon/);

  // Check that the page is not blank
  const bodyContent = await page.content();
  expect(bodyContent.length).toBeGreaterThan(100);
});

test('Navigate to products page', async ({ page }) => {
  await page.goto('/en/products');

  // Clear cookie consent if present
  await clearCookieConsent(page);

  await expect(page.locator('h1')).toBeVisible();
  const bodyContent = await page.content();
  expect(bodyContent.length).toBeGreaterThan(100);
});

test('Click Buy button from homepage and check Buy page loads', async ({ page }) => {
  await page.goto('/');

  // Clear cookie consent if present
  await clearCookieConsent(page);

  // Click the Buy button
  await page.getByRole('link', { name: 'BUY' }).first().click();

  // Verify the URL
  await expect(page).toHaveURL(/\/en\/buy/);

  // Check that some content is visible
  const buyPageContent = await page.content();
  expect(buyPageContent.length).toBeGreaterThan(100);

  // Optional: Check for a specific element or text to confirm correct load
  await expect(page.locator('h1')).toBeVisible();
});
