'use strict';
describe('Advanced Testing', () => {
  beforeEach(async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');
  });
  it('File Upload 1', async () => {
    const filePath = './my-screenshot.png';
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(5000);
  });

  it('File Upload 2', async () => {
    const filePath = './my-screenshot.png';
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(5000);
  });

  it('File Upload 3', async () => {
    const filePath = './my-screenshot.png';
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(5000);
  });
});
