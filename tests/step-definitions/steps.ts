import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import loginPage from '../../pages/login.page.ts';
import cartPage from '../../pages/cart.page.ts';

Given(/^I am on the login page$/, async () => {
    await loginPage.openMenuOptions();
    await loginPage.navigateToLoginPage();
});

When(/^I login with (.*) and (.*)$/, async (username:string, password:string) => {
    await loginPage.performLogin(username, password);
});

Then(/^I should see error (.*) for (.*)$/, async(message:string, profile:string) => {
	switch (profile) {
        case "LOCKED":
            await expect(loginPage.loginErrMsg).toHaveText(message);
            break;
        case "NO_MATCH":
            await expect(loginPage.loginErrMsg).toHaveText(message);
            break;
        case "NO_USER_DETAILS":
            await expect(loginPage.usernameErrMsg).toHaveText(message);
            break;
        case "NO_PASSWORD":
            await expect(loginPage.passwordErrMsg).toHaveText(message);
            break;
        default:
            break;
    }
});


Then(/^I see Cart page after again navigating to Login page$/, async () => {
    await loginPage.openMenuOptions();
    await loginPage.navigateToLoginPage();
    await expect(cartPage.goShoppingBtn).toBeExisting();
});
