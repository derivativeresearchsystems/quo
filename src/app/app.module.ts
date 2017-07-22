/**
 * Node modules imported below
 * */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * App modules imported below
 * */
import { AppRoutingModule } from './init-modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './init-pages/home/home.component';
import { LoginComponent } from './init-pages/login/login.component';
import { FourNotFourComponent } from './init-pages/four-not-four/four-not-four.component';

/**
 * Core module defined below
 * */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FourNotFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
