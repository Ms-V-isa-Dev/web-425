/**
 * Title: Assignment 8.2
 * Author: Verlee Washington
 * Date: 08/25/2020
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
    this.assignment ='Welcome to In-N-Out-Books'
  }

}
