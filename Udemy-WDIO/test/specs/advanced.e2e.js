'use strict';
describe('Advanced Testing', () => {
  beforeEach(async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');
  });
  it('File Upload 1', async () => {
    const filePath = './my-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(5000);
  });

  it('File Upload 2', async () => {
    const filePath = './my-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(5000);
  });

  it('File Upload 3', async () => {
    const filePath = './my-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(5000);
  });

  it('Display Title and URL', async () => {
    const results = await browser.getTitleAndUrl();
    console.log(`TITLE = ${results.title}`);
    console.log(`URL = ${results.url}`);
    await browser.waitAndClick('#file-submit');
    await browser.pause(5000);
  });

  it('Change browser session', async () => {
    console.log(`SESSION BEFORE RELOAD ${browser.sessionId}`);
    await browser.reloadSession();
    console.log(`SESSION AFTER RELOAD ${browser.sessionId}`);
  });

  it.only('Create and switch new window', async () => {
    await browser.url('https://google.com');
    await browser.newWindow('https://webdriver.io');
    await browser.pause(5000);
    await browser.switchWindow('google.com');
    await browser.pause(5000);
  });
});
