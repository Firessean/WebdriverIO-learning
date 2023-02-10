'use strict';
describe('Feedback Form', () => {
  it('should submit feedback form with all the values', async () => {
    const name = 'Peter';
    const email = 'test@test.com';
    const subject = 'subject';
    const message = 'My very short message for the feedback test';

    await browser.url('http://zero.webappsecurity.com/index.html');
    await browser.waitAndClick('#feedback');
    await $('.form-inputs').waitForDisplayed();
    await $('#name').setValue(name);
    await $('#email').setValue(email);
    await $('#subject').setValue(subject);
    await $('#comment').setValue(message);
    await $('input[type="submit"]').click();
    await expect(browser).toHaveUrlContaining('sendFeedback.html');
  });
});
