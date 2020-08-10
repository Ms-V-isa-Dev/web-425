/**
 * Title: Assignment 5.4
 * Author: Verlee Washington
 * Date: 08/9/2020
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
    this.assignment ='Exercise 5.4 - Dialogs'
  }

}
