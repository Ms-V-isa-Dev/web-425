/**
 *Title: Assignment 1.5
 *Author: Verlee Washington
 *Date: 07/09/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

/* Creating and exporting variables */
export class MyDetailsComponent implements OnInit {
  detail1 ='Name: Verlee Washington';
  detail2 ='Favorite Food: Fish & Chips';
  detail3 ='Favorite Color: Purple';
  constructor() { }

  ngOnInit(): void {
  }

}
