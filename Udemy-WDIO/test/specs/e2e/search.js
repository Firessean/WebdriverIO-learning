'use strict';
describe('Search Feature', () => {
  it('should search for values using keyboard press', async () => {
    await browser.url('http://zero.webappsecurity.com/index.html');
    await $('#searchTerm').waitForDisplayed();
    await $('#searchTerm').setValue('bank');
    await browser.keys('Enter');
    const results = await $('h2');
    await results.waitForDisplayed();
    await expect(results).toHaveTextContaining('Search Results:');
  });
});
