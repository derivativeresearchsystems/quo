import { InitPagesModule } from './init-pages.module';

describe('InitPagesModule', () => {
  let initPagesModule: InitPagesModule;

  beforeEach(() => {
    initPagesModule = new InitPagesModule();
  });

  it('should create an instance', () => {
    expect(initPagesModule).toBeTruthy();
  });
});
