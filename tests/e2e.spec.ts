import { customerData } from 'data';
import { expect, fixtures as test } from 'fixture';

test.describe('Signup', () => {
  test('should be able to signup and land in workspace', async ({ webApp, page }) => {
    const { homePage, createAccountPage, businessSignupPage, workspacePage } = webApp;

    await test.step('open signup page', async () => {
      await expect(homePage.navBar).toBeVisible();
      await expect(homePage.signUpButton).toBeVisible();
      await homePage.openSignupPage();
    });

    await test.step('create account', async () => {
      await expect(page).toHaveURL(/.*create-account/);
      await createAccountPage.emailInput.fill(customerData.email);
      await createAccountPage.passwordInput.fill(customerData.password);
      await createAccountPage.createAccountButton.click();
      await expect(createAccountPage.createAccountButton).toBeHidden();
    });

    await test.step('fill business details', async () => {
      await expect(businessSignupPage.fullNameInput).toBeVisible();
      await businessSignupPage.fullNameInput.fill(
        `${customerData.firstName} ${customerData.lastName}`,
      );
      await businessSignupPage.companyInput.fill(customerData.companyName);
      await businessSignupPage.selectCountry(customerData.countryName);
      await businessSignupPage.selectNumberOfEmpolyees(customerData.numberOfEmployees);
      await businessSignupPage.telephoneInput.fill(customerData.telephone);
      await businessSignupPage.saveProfileButton.click();
      await expect(businessSignupPage.saveProfileButton).toBeHidden();
    });

    await test.step('open workspace', async () => {
      await homePage.acceptCookies();
      await expect(workspacePage.spinner).toBeHidden();
      await expect(workspacePage.workspaceSelector).toBeVisible();
    });
  });

  test('password should meet expect criteria to create an accont', async ({ webApp, page }) => {
    const { homePage, createAccountPage } = webApp;

    await test.step('open signup page', async () => {
      await expect(homePage.navBar).toBeVisible();
      await expect(homePage.signUpButton).toBeVisible();
      await homePage.openSignupPage();
    });

    await test.step('create account', async () => {
      await expect(page).toHaveURL(/.*create-account/);
      await createAccountPage.emailInput.fill('wrong.password.account@ninox.sat');
      await createAccountPage.passwordInput.fill('WrongPassword1');
      await createAccountPage.createAccountButton.click();
      await expect(createAccountPage.wrongPasswordMsg).toBeVisible();
    });
  });
});
