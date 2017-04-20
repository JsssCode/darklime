import { DLStartPage } from './app.po';

describe('dlstart App', function() {
  let page: DLStartPage;

  beforeEach(() => {
    page = new DLStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
