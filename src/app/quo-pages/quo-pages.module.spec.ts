import { QuoPagesModule } from './quo-pages.module';

describe('QuoPagesModule', () => {
  let initPagesModule: QuoPagesModule;

  beforeEach(() => {
    initPagesModule = new QuoPagesModule();
  });

  it('should create an instance', () => {
    expect(initPagesModule).toBeTruthy();
  });
});
