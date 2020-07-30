/**
 * Title: Assignment 4.2
 * Author: Verlee Washington
 * Date: 07/29/2020
 * Modified by:
 * Description: Transferring from class to service.
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Florence Price", genre: " Classical"
      },
      {
        composerId: 101, fullName: "Claude Debussy", genre: " Classical"
      },
      {
        composerId: 102, fullName: "Frederic Chopin", genre: " Classical"
      },
      {
        composerId: 103, fullName: "Marianna Martines", genre: " Classical"
      },
      {
        composerId: 104, fullName: "Antonio Vivaldi", genre: " Classical"
      },
    ]
  }

  //Data access points
  getComposers() {
    return this.composers;
  }
 // Loop over the composer list return data
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
