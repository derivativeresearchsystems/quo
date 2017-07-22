import { QuoPipesModule } from './quo-pipes.module';

describe('QuoPipesModule', () => {
  let quoPipesModule: QuoPipesModule;

  beforeEach(() => {
    quoPipesModule = new QuoPipesModule();
  });

  it('should create an instance', () => {
    expect(quoPipesModule).toBeTruthy();
  });
});
