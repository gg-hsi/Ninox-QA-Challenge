import { expect } from 'fixture';
import { Locator, Page } from 'playwright-core';

export default class HomePage {
  private page: Page;
  readonly title: Locator;
  readonly loginButton: Locator;
  readonly signUpButton: Locator;
  readonly navBar: Locator;
  readonly cookiesDialog: Locator;
  readonly acceptCookiesButton: Locator;
  readonly useOption: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Elements
    //----------------------------------------------------------------------------------------------
    this.title = this.page.getByTitle('Counter App');
    this.loginButton = this.page.getByRole('button', { name: 'Sign in' });
    this.signUpButton = this.page.locator('[class="nav_button primary w-button"]');
    this.navBar = this.page.locator('[class="navbar_component w-nav"]');
    this.cookiesDialog = this.page.locator('#CybotCookiebotDialog');
    this.acceptCookiesButton = this.page.locator(
      '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    );
    this.useOption = this.page.getByTestId('option-business');
    this.nextButton = this.page.getByRole('button', { name: 'Next' });
  }

  // Actions
  //------------------------------------------------------------------------------------------------
  async openSignupPage(): Promise<void> {
    await this.signUpButton.click();
    await expect(this.signUpButton).toBeHidden();
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(1000);
    const useOptionIsVisible = await this.useOption.isVisible();
    if (useOptionIsVisible) {
      await this.useOption.click();
      await this.nextButton.click();
      await expect(this.nextButton).toBeHidden();
    }
  }

  async acceptCookies(): Promise<void> {
    await expect(this.cookiesDialog).toBeVisible();
    await this.acceptCookiesButton.click();
    return expect(this.cookiesDialog).toBeHidden();
  }
}
