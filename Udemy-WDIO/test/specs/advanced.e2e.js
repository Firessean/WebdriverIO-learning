'use strict';
describe('Advanced Testing', () => {
  it('File Upload', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');

    const filePath = './my-screenshot.png';
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(5000);
  });
});
