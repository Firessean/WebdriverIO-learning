import BasePage from './base.page.js';

class FeedbackPage extends BasePage {
  get nameInput() {
    return $('#name');
  }

  get emailInput() {
    return $('#email');
  }

  get subjectInput() {
    return $('#subject');
  }

  get messageInput() {
    return $('#comment');
  }

  get submitButton() {
    return $('input[type="submit"]');
  }

  get feedbackTitle() {
    return $('#feedback-title');
  }

  async visit() {
    await browser.url('http://zero.webappsecurity.com/feedback.html');
  }

  async submitFeedback() {
    await this.nameInput.setValue('My Name');
    await this.emailInput.setValue('test@test.com');
    await this.subjectInput.setValue('subject');
    await this.messageInput.setValue('Test Message');
    await this.submitButton.click();
  }

  async assertResult() {
    await expect(this.feedbackTitle).toBeDisplayed();
  }
}

export default new FeedbackPage();
