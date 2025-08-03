import { test as base } from '@playwright/test';
import { BusinessSignupPage, CreateAccountPage, HomePage, WorkspacePage } from 'pages';

type WebApp = {
  homePage: HomePage;
  createAccountPage: CreateAccountPage;
  businessSignupPage: BusinessSignupPage;
  workspacePage: WorkspacePage;
};

const fixtures = base.extend<{
  webApp: WebApp;
}>({
  webApp: async ({ page }, use) => {
    const homePage = new HomePage(page);
    const createAccountPage = new CreateAccountPage(page);
    const businessSignupPage = new BusinessSignupPage(page);
    const workspacePage = new WorkspacePage(page);
    await page.goto('/', { waitUntil: 'load' });
    //  Accept Cookies
    await homePage.acceptCookies();

    await use({ homePage, createAccountPage, businessSignupPage, workspacePage });
  },
});

export { expect } from '@playwright/test';
export { fixtures };
