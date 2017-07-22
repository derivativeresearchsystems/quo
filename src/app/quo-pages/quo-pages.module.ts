/**
 * Node imported modules below
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imported modules below
 * */
import { HomeComponent } from './home/home.component';
import { FourNotFourComponent } from './four-not-four/four-not-four.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    FourNotFourComponent,
    DashboardComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    FourNotFourComponent
  ]
})
export class QuoPagesModule { }
