'use strict';
describe('Sauce Demo - Product Order', () => {
  before(async () => {
    await browser.url('https://www.saucedemo.com/');
    await browser.sauceLogin();
  });

  after(async () => {
    await browser.sauceLogout();
  });

  it('should complete product order', async () => {
    await $('#inventory_container').waitForDisplayed();
    await $('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await $('.shopping_cart_link').click();

    await $('.cart_list').waitForDisplayed();
    await $('[data-test="checkout"]').click();

    const firstName = 'Peter';
    const lastName = 'Angelo';
    const postalCode = '112233';
    await $('.checkout_info').waitForDisplayed();
    await $('[data-test="firstName"]').setValue(firstName);
    await $('[data-test="lastName"]').setValue(lastName);
    await $('[data-test="postalCode"]').setValue(postalCode);
    await $('[data-test="continue"]').click();

    await $('#checkout_summary_container').waitForDisplayed();
    await $('[data-test="finish"]').click();
    expect($('.complete-header')).toHaveTextContaining(
        'THANK YOU FOR YOUR ORDER'
    );
  });
});
