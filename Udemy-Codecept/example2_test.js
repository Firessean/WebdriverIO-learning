Feature('Example Test Suite Number Two');

Scenario('My first test', ({ I }) => {
  I.amOnPage('https://example.com/');
  I.seeElement('h1');
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
