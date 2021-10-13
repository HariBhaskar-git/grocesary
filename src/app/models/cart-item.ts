////export class Cart {
////}
import { Product } from './product';

export class CartItem {
  cartitemid: number;
  productid: number;
  productname: string;
  quantity: number;
  price: number;

  //constructor(cartitemid: number, product: Product, quantity  = 1) {
  //  this.cartitemid = cartitemid;
  //  this.productid = product.productid;
  //  this.productname = product.productname;
  //  this.price = product.price;
  //  this.quantity = quantity;
  //}

  constructor(cartitemid: number, productid: number, productname: string, quantity = 1, price: number)
    {
    this.cartitemid = cartitemid;
    this.productid = productid;
    this.productname = productname;
    this.price = price;
    this.quantity = quantity;
  }
}
