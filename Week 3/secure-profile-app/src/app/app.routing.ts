/**
 *Title: Assignment 3.3
 *Author: Verlee Washington
 *Date: 07/24/2020
 *Modified by:
 *Description: Creating app components.
*/
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
