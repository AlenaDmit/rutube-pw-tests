import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByText(
      'RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация',
    );

    this.categoriesTabsLocator = this.page
      .locator('section section')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .first();

    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: 'categoriesTabsSnapshot.yml',
    });
  }

  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuSnapshot.yml' });
  }
}
