/**
 *Title: Assignment 1.4
 *Author: Verlee Washington
 *Date: 07/06/2020
 *Modified by:
 *Description: Creating a person class
               .ts file.
*/
import { IPerson } from "./person.interface";

class Person implements IPerson {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Verlee", "Washington");
console.log(`My name is ${myName.firstName} ${myName.lastName}.`);
