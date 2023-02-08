'use strict';
describe('My first test suite', () => {
  it('my first wdio test', async () => {
    const exampleURL = 'https://example.com';
    let smallPause = 2000;
    let bigPause = 5000;
    await browser.url(exampleURL);
    await browser.pause(smallPause);
    // Old way
    // const pageTitle = await browser.getTitle();
    // const pageURL = await browser.getUrl();
    // expect(pageTitle).toContain('Example Domain');
    // expect(pageURL).toContain('example.com');
    // Modern way
    await expect(browser).toHaveTitleContaining('Example Domain');
    await expect(browser).toHaveUrlContaining('example.com');

    const pageElement = await $('h1');
    await expect(pageElement).toExist();
    await expect(pageElement).toBeDisplayed();
    await expect(pageElement).toHaveTextContaining('Example');
  });

  it('Forms and Inputs', async () => {
    await browser.url('https://www.saucedemo.com/');

    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();

    const inventoryContainer = await $('#inventory_container');
    await expect(inventoryContainer).toBeDisplayed();
  });
});
