/**
 * Title: Assignment 6.2
 * Author: Verlee Washington
 * Date: 08/17/2020
 * Description: app components
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment ='Exercise 6.2 - In/Output Properties, Part 1'
  }

}
