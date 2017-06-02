import { PRINTDIGITSPage } from './app.po';

describe('print-digits App', () => {
  let page: PRINTDIGITSPage;

  beforeEach(() => {
    page = new PRINTDIGITSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
