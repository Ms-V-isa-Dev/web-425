/**
 * Title: Assignment 5.4
 * Author: Verlee Washington
 * Date: 08/9/2020
 * Description: book interface
 */

 export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
