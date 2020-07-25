/**
 *Title: Assignment 3.3
 *Author: Verlee Washington
 *Date: 07/24/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn =Boolean(this.route.snapshot.queryParamMap.get("isLoggedIn"));
   }

  ngOnInit(): void {
  }

}
