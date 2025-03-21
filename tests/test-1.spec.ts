import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rutube.ru/');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByText('RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация').click();
  await page.locator('.wdp-search-suggest-overlay-module__wdp-search-suggest-overlay').click();
  await page.getByText('RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация').click();
  await page.locator('.wdp-search-suggest-overlay-module__wdp-search-suggest-overlay').click();
});