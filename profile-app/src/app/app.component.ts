/**
 *Title: Assignment 1.5
 *Author: Verlee Washington
 *Date: 07/09/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Creating and exporting variables */
export class AppComponent {
  assignment = 'Assignment 1.5 - Components';
  image = 'My Image';
  details = 'My Details';
}


