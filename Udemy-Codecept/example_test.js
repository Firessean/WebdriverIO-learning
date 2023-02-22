Feature('Example Test Suite');

Scenario('My first test', ({ I, ExamplePage }) => {
  I.amOnPage('https://example.com/');
  // I.seeElement('h1');
  ExamplePage.assertTitle();
});

Scenario('My second test', ({ I }) => {
  I.amOnPage('https://example.com/');
  I.seeElement('h1');
});

Scenario('My third test', ({ I }) => {
  I.amOnPage('https://example.com/');
  I.seeElement('h1');
  I.seeElement('.error');
});
