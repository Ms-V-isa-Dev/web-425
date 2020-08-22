/**
 * Title: Assignment 6.3
 * Author: Verlee Washington
 * Date: 08/17/2020
 * Description: Base layout component.ts
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;


  constructor() {
    this.assignment='Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
