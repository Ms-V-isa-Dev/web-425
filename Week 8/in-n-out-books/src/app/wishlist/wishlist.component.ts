/**
 * Title: Assignment 6.2
 * Author: Verlee Washington
 * Date: 08/17/2020
 * Description: Business logic
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item-interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> =[];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
