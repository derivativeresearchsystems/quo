import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/init/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
