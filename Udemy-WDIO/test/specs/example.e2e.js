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

  it('Selectbox and Checkbox', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/');

    const selectbox = await $('#preferred-interface');
    await selectbox.selectByVisibleText('Both');

    const option = await $('option=Both');
    await expect(option).toBeSelected();
  });

  it('Set Browser Size', async () => {
    await browser.setWindowSize(400, 400);
    await browser.url('https://example.com');

    const selector = await $('h1');
    await selector.waitForExist();
    await selector.waitForDisplayed();

    await browser.pause(5000);
  });

  it('Device Emulation', async () => {
    const mobile = [375, 812];
    const tablet = [1024, 768];
    const desktop = [1650, 1050];

    // Mobile Device
    await browser.setWindowSize(mobile[0], mobile[1]);
    await browser.url('https://example.com');
    await browser.pause(2000);
    // Tablet Device
    await browser.setWindowSize(tablet[0], tablet[1]);
    await browser.url('https://example.com');
    await browser.pause(2000);
    // Desktop Device
    await browser.setWindowSize(desktop[0], desktop[1]);
    await browser.url('https://example.com');
    await browser.pause(2000);
  });

  it('Screenshots', async () => {
    await browser.url('https://example.com');
    await browser.saveScreenshot('my-screenshot.png');

    const title = await $('h1');
    await title.saveScreenshot('title-screenshot.png');
  });
});
