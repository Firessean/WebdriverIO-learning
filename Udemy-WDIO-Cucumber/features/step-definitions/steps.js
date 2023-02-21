import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import FeedbackPage from '../pageobjects/feedback.page.js';

Given(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});
Given(/^I am on the home page$/, async () => {
  await HomePage.visit();
});
Given(/^I am on the feedback page$/, async () => {
  await FeedbackPage.visit();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
When(/^I submit the feedback form$/, async () => {
  await FeedbackPage.submitFeedback();
});

When(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('invalid-username', 'invalid-password');
});

When(/^I search for "([^"]*)"$/, async (text) => {
  await HomePage.searchFor(text);
});

Then(/^I should see error message$/, async () => {
  await LoginPage.assertErrormessage();
});

Then(/^I should see results$/, async () => {
  const selector = await $('h2');
  await expect(selector).toBeDisplayed();
});

Then(/^I should see feedback results$/, async () => {
  await FeedbackPage.assertResult();
});
