/**
 *Title: Assignment 1.5
 *Author: Verlee Washington
 *Date: 07/09/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

/* Creating and exporting variables */
export class MyImageComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

}
