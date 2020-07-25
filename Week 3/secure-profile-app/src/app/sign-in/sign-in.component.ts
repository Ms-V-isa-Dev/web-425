/**
 *Title: Assignment 3.3
 *Author: Verlee Washington
 *Date: 07/24/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
