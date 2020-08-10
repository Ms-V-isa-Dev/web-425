/**
 * Title: Assignment 5.3
 * Author: Verlee Washington
 * Date: 08/9/2020
 */
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780747532743',
        title: "Harry Potter and the Philosopher's Stone",
        description: 'The first of a seven book series.',
        numOfPages: 320,
        authors: ['J.K. Rowling']
      },
      {
        isbn: '9780439136365',
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: 'Harry Potter must confront the devious and dangerous wizard responsible for his parents death.',
        numOfPages: 435,
        authors: ['J.K. Rowling']
      },
      {
        isbn: '9780007117116',
        title: 'The Fellowship of the Ring',
        description: 'The first volume in J.R.R. Tolkien"s The Lord Of the Rings One Ring to rule them all',
        numOfPages: 423,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '97800007123803',
        title: 'The Return of the King',
        description: '',
        numOfPages: 416,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '978006231276',
        title: 'Act Like A Lady Think Like A Man',
        description: 'What men really think about love, relationships, intimacy, and commitment.',
        numOfPages: 304,
        authors: ['Steve Harvey']
      }

    ]
  }
  // Returns an observable array of IBooks
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //Accepts isbn number loop over book array and return book.
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
