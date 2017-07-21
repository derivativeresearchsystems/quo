import { QuoPage } from './app.po';

describe('quo App', () => {
  let page: QuoPage;

  beforeEach(() => {
    page = new QuoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to quo!');
  });
});
