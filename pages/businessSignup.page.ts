import { Locator, Page, Response } from 'playwright-core';

export default class BusinessSignupPage {
  private page: Page;
  readonly createAccountButton: Locator;
  readonly fullNameInput: Locator;
  readonly companyInput: Locator;
  readonly telephoneInput: Locator;
  readonly numberOfEmployeesInput: Locator;
  readonly countryInput: Locator;
  readonly saveProfileButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Elements
    //----------------------------------------------------------------------------------------------
    this.createAccountButton = this.page.getByRole('button', { name: 'Create account' });
    this.fullNameInput = this.page.locator('#fullName');
    this.companyInput = this.page.locator('#company');
    this.telephoneInput = this.page.locator('#telephone');
    this.numberOfEmployeesInput = this.page.locator('#numberOfEmployees');
    this.countryInput = this.page.locator('#country');
    this.saveProfileButton = this.page.getByTestId('save-profile');
  }
  selectOption = (name: string): Locator => this.page.getByRole('option', { name });

  // Actions
  //------------------------------------------------------------------------------------------------
  async open(): Promise<null | Response> {
    return this.page.goto('/business-signup');
  }

  async selectCountry(countryName: string): Promise<void> {
    await this.countryInput.click();
    return this.selectOption(countryName).click();
  }

  async selectNumberOfEmpolyees(numberOfEmployees: string): Promise<void> {
    await this.numberOfEmployeesInput.click();
    return this.selectOption(numberOfEmployees).click();
  }
}
