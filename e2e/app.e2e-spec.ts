import { TypegularPage } from './app.po';

describe('typegular App', () => {
  let page: TypegularPage;

  beforeEach(() => {
    page = new TypegularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
