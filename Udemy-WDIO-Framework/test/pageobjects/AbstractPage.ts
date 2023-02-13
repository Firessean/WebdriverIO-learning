import * as crypto from 'crypto';

export default class AbstractPage {
  public async waitForSeconds(seconds: number) {
    await browser.pause(seconds * 1000);
  }

  public async setFullHDResolution() {
    await browser.setWindowSize(1980, 1080);
  }

  public async setNetworkSpeedTo3G() {
    await browser.throttle('Regular3G');
  }

  public async takeScreenshot(path: string) {
    await browser.saveScreenshot(path);
  }

  public async generateRandomNumber() {
    return Math.floor(Math.random() * 100000 + 1);
  }

  public async generateRandomString() {
    return crypto.randomBytes(20).toString('hex');
  }
}
