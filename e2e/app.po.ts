import { browser, by, element } from 'protractor';

export class QuoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quo-root h1')).getText();
  }
}
