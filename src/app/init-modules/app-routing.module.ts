/**
 * Node modules imported below
 * */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App modules imported below
 * */
import { HomeComponent } from '../init-pages/home/home.component';
import { LoginComponent } from '../init-pages/login/login.component';
import { FourNotFourComponent } from '../init-pages/four-not-four/four-not-four.component';

/**
 * Route configuration implemented below
 * */
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '404',
    component: FourNotFourComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

/**
 * Core module defined below
 * */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
