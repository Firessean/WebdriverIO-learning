class FeedbackPage {
  public get feedbackForm() {
    return $('.form-inputs');
  }

  public get nameInput() {
    return $('#name');
  }

  public get emailInput() {
    return $('#email');
  }

  public get subjectInput() {
    return $('#subject');
  }

  public get messageInput() {
    return $('#comment');
  }

  public get submitButton() {
    return $('input[type="submit"]');
  }

  public get feedbackTitle() {
    return $('#feedback-title');
  }

  public async submitFeedback(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    await this.feedbackForm.waitForDisplayed();
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.subjectInput.setValue(subject);
    await this.messageInput.setValue(message);
    await this.submitButton.click();
  }

  public async assertSubmitFeedback() {
    await expect(this.feedbackTitle).toHaveTextContaining('Feedback');
  }
}

export default new FeedbackPage();
