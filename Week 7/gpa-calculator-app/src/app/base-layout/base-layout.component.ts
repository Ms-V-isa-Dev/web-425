/**
 * Title: Assignment 7.3
 * Author: Verlee Washington
 * Date: 08/22/2020
 * Description: Base layout component.ts
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;


  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment='Exercise 7.2 - GPA Calculator';
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
