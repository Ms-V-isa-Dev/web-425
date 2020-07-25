/**
 *Title: Assignment 3.3
 *Author: Verlee Washington
 *Date: 07/24/2020
 *Modified by:
 *Description: Creating app components.
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log (`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

/* Creating and exporting variables */
export class MyDetailsComponent implements OnInit {

  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Verlee Washington", "Fish & Chips", "Purple")
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
