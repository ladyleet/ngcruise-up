import { NgcruiseUpPage } from './app.po';

describe('ngcruise-up App', function() {
  let page: NgcruiseUpPage;

  beforeEach(() => {
    page = new NgcruiseUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
