import { RooterAngularPage } from './app.po';

describe('rooter-angular App', function() {
  let page: RooterAngularPage;

  beforeEach(() => {
    page = new RooterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rt works!');
  });
});
