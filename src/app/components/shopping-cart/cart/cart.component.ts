////import { Component, OnInit } from '@angular/core';

////@Component({
////  selector: 'app-cart',
////  templateUrl: './cart.component.html',
////  styleUrls: ['./cart.component.css']
////})
////export class CartComponent implements OnInit {

////  constructor() { }

////  ngOnInit(): void {
////  }

////}
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems :any = [] ;

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe(() => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      console.log("getting the cart items", items)
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item: any) => {
      console.log("getting the cart items quantity ", item.quantity)
      console.log("getting the cart items price ", item.price)
      this.cartTotal += (item.quantity * item.price)
    })
  }
}
