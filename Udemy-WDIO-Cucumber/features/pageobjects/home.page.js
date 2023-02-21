import BasePage from './base.page.js';

class HomePage extends BasePage {
  get searchBox() {
    return '#searchTerm';
  }

  async visit() {
    await browser.url('http://zero.webappsecurity.com/index.html');
  }

  async searchFor(text) {
    await $(this.searchBox).setValue(text);
    await browser.keys(['Enter']);
  }
}

export default new HomePage();
