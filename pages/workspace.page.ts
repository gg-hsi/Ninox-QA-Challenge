import { Locator, Page } from 'playwright-core';

export default class WorkspacePage {
  private page: Page;

  readonly workspaceSelector: Locator;
  readonly spinner: Locator;

  constructor(page: Page) {
    this.page = page;
    // Elements
    //----------------------------------------------------------------------------------------------
    this.spinner = this.page.locator('[class="spinner"]');
    this.workspaceSelector = this.page.getByTestId('workspace-selector');
  }

  // Actions
  //------------------------------------------------------------------------------------------------
}
