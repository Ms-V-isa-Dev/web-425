/**
 * Title: Assignment 7.2
 * Author: Verlee Washington
 * Date: 08/21/2020
 * Description: Sign in service.ts
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
