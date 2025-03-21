import { test, expect } from '../../fixture/fixtures';

test('Check accessibility correct header elements', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check accessibility correct tab categories', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Check accessibility correct menu', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
