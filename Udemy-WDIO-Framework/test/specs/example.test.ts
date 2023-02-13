// @ts-ignore
import HomePage from '../pageobjects/HomePage.ts';
// @ts-ignore
import LoginPage from '../pageobjects/LoginPage.ts';
// @ts-ignore
import FeedbackPage from '../pageobjects/FeedbackPage.ts';

describe('Login test', () => {
  it('should not login with invalid username and password', async () => {
    await HomePage.visit();
    await HomePage.clickOnSignIn();
    await LoginPage.assertLoginPageIsVisible();
    await LoginPage.login('test', 'test');
    await LoginPage.assertLoginPageError();
    await browser.pause(4000);
  });
});

describe('Feedback test', () => {
  it('should submit the feedback form', async () => {
    await HomePage.visit();
    await HomePage.clickOnFeedbackLink();
    await FeedbackPage.submitFeedback(
      'test',
      'test@test.com',
      'test',
      'Test message'
    );
    await FeedbackPage.assertSubmitFeedback();
    await browser.pause(5000);
  });
});
