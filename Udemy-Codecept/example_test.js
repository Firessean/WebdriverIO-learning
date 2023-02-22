Feature('Example Test Suite');

Scenario('My first test', ({ I }) => {
  I.amOnPage('https://example.com/');
  I.seeElement('h1');
});
