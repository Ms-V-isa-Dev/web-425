/**
 * Title: Assignment 5.2
 * Author: Verlee Washington
 * Date: 08/9/2020
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
    this.assignment ='Exercise 5.3 - Data Tables'
  }

}
