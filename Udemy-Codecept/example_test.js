Feature('Example Test Suite');

Scenario('My first', ({ I }) => {
  I.amOnPage('https://example.com/');
  I.wait(2);
  I.seeElement('h1');
});
