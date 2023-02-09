'use strict';
describe('Login Flow', () => {
  before(async () => {
    await browser.url('http://zero.webappsecurity.com/index.html');
  });
  it('should not login with invalid username and password', async () => {
    await browser.waitAndClick('#signin_button');
    await $('#login_form').waitForDisplayed();
    await $('#user_login').setValue('test');
    await $('#user_password').setValue('test');
    await $('input[type="submit"]').click();
    const errorMessage = await $('.alert-error');
    await expect(errorMessage).toHaveTextContaining(
      'Login and/or password are wrong.'
    );
  });
});
