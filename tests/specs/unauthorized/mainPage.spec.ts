import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Check accessibility correct header elements', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check accessibility correct tab categories', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Check accessibility correct menu', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
