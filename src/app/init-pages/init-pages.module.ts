import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FourNotFourComponent } from './four-not-four/four-not-four.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    FourNotFourComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    FourNotFourComponent
  ]
})
export class InitPagesModule { }
