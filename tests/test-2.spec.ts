import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rutube.ru/');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
});