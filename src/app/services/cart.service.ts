////import { Injectable } from '@angular/core';

////@Injectable({
////  providedIn: 'root'
////})
////export class CartService {

////  constructor() { }
////}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
   return this.http.get<CartItem[]>(cartUrl).pipe(
    // return this.http.get<CartItem[]>("./assets/cartitems.json").pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];
      //  console.log("cart service items", result)
        for (let item of result) {
          let productExists = false
      //    console.log("cart items", item)
          for (let i in cartItems) {
         //   console.log("cart items loop", cartItems)
            if (cartItems[i].productid === item.productid) {
              cartItems[i].quantity++
              productExists = true
              break;
            }
          }

          if (!productExists) {

            
            cartItems.push(new CartItem(item.cartitemid, item.productid,item.productname,item.quantity,item.price));
          }
        }
        console.log("cart service items out side", cartItems)
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    console.log("cart items", product);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post(cartUrl,  product , { 'headers': headers });
  }
}
