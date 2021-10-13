////import { Injectable } from '@angular/core';

////@Injectable({
////  providedIn: 'root'
////})
////export class WishlistService {

////  constructor() { }
////}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  //getWishlist() {
  //  return this.http.get(wishlistUrl).pipe(
  //    map((result: any[]) => {
  //      let productIds: any[] = []
  //    result.forEach((item) => productIds.push(item.id))
  //            return productIds;
  //    })
  //  )
  //}

  getWishlist() {
    return this.http.get(wishlistUrl);
  }

  addToWishlist(productId:number) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId:number) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
