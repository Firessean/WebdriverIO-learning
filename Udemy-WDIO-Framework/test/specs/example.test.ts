// @ts-ignore
import HomePage from '../pageobjects/HomePage.ts';

describe('My first test using page objects pattern', () => {
  it('should load homepage', async () => {
    await HomePage.visit();
    await HomePage.clickOnSignIn();
    await browser.pause(4000);
  });
});
