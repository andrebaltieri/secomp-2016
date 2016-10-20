import { SecompPage } from './app.po';

describe('secomp App', function() {
  let page: SecompPage;

  beforeEach(() => {
    page = new SecompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
