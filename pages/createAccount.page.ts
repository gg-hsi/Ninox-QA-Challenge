import { Locator, Page, Response } from 'playwright-core';

export default class CreateAccountPage {
  private page: Page;
  readonly createAccountButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly wrongPasswordMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    // Elements
    //----------------------------------------------------------------------------------------------
    this.createAccountButton = this.page.getByRole('button', { name: 'Create account' });
    this.emailInput = this.page.locator('#email');
    this.passwordInput = this.page.locator('#password');
    this.wrongPasswordMsg = this.page.getByText('Incorrect password. Please try again.');
  }

  // Actions
  //------------------------------------------------------------------------------------------------
  async open(): Promise<null | Response> {
    return this.page.goto('/create-account');
  }
}
