// @ts-ignore
import HomePage from '../pageobjects/HomePage.ts';
// @ts-ignore
import LoginPage from '../pageobjects/LoginPage.ts';

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
