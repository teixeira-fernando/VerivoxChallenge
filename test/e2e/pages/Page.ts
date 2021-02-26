import cucumberJson from 'wdio-cucumberjs-json-reporter';

export default class Page {
  open(path?: string) {
    if (path !== undefined) {
      browser.url(browser.config.baseUrl + path);
    } else {
      browser.url(browser.config.baseUrl);
    }
  }

  saveScreenshot() {
    cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  }
}
