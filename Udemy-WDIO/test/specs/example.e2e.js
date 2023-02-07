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
    expect(browser).toHaveTitleContaining('Example Domain');
    expect(browser).toHaveUrlContaining('example.com');
  });
});
