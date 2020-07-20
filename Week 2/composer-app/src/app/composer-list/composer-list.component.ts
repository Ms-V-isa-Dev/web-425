import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }


  toString() {
    console.log(`\n Name: ${this.fullName}\n Genre: ${this.genre}`);
  }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  cProfile: Composer;

  constructor() {
      this.cProfile = new Composer("Frederic Chopin", " Classical");

      this.cProfile.toString();
  }
  ngOnInit(): void {
  }

}
