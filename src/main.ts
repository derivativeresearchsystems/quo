/**
 * Node modules imported below
 * */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * App modules imported below
 * */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**
 * Production mode enabled below
 * */
if (environment.production) {
  enableProdMode();
}

/**
 * App bootstrapped below
 * */
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(value => console.log(`App bootstrapped successfully`, value))
  .catch(reason => console.log(reason));

/**
 * HMR enabled below
 * */
if (module['hot']) {
  module['hot'].accept();
}
