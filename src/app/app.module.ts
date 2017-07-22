/**
 * Node modules imported below
 * */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

/**
 * App modules imported below
 * */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoComponentsModule } from './quo-components/quo-components.module';
import { QuoPagesModule } from './quo-pages/quo-pages.module';

/**
 * Core module defined below
 * */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuoComponentsModule,
    QuoPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
