import { QuoComponentsModule } from './quo-components.module';

describe('QuoComponentsModule', () => {
  let quoComponentsModule: QuoComponentsModule;

  beforeEach(() => {
    quoComponentsModule = new QuoComponentsModule();
  });

  it('should create an instance', () => {
    expect(quoComponentsModule).toBeTruthy();
  });
});
