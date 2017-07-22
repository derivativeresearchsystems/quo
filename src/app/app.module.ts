/**
 * Node modules imported below
 * */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

/**
 * App modules imported below
 * */
import { AppRoutingModule } from './init-modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './init-modules/materials.module';
import { HeaderComponent } from './init-components/header/header.component';
import { InitPagesModule } from './init-pages/init-pages.module';
import { QuoPipesModule } from './core-modules/quo-pipes/quo-pipes.module';

/**
 * Core module defined below
 * */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    InitPagesModule,
    QuoPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
