import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';

Given(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('invalid-username', 'invalid-password');
});

Then(/^I should see error message$/, async () => {
  await LoginPage.assertErrormessage();
});
