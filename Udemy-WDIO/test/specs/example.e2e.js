'use strict';
describe('My first test suite', () => {
  it('my first wdio test', async () => {
    const exampleURL = 'https://example.com';
    let smallPause = 2000;
    let bigPause = 5000;
    await browser.url(exampleURL);
    await browser.pause(smallPause);
    await browser.url('https://www.saucedemo.com/');
    await browser.pause(bigPause);
  });
});
