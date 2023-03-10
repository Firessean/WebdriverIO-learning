// @ts-ignore
import AbstractPage from './AbstractPage.ts';

class HomePage extends AbstractPage {
  // Here selectors

  public get feedbackLink() {
    return $('#feedback');
  }

  // Here functions
  public async visit() {
    await browser.url('http://zero.webappsecurity.com/index.html');
  }

  public async clickOnFeedbackLink() {
    await this.feedbackLink.click();
  }
}

export default new HomePage();
