////import { Component, OnInit } from '@angular/core';

////@Component({
////  selector: 'app-product-item',
////  templateUrl: './product-item.component.html',
////  styleUrls: ['./product-item.component.css']
////})
////export class ProductItemComponent implements OnInit {

////  constructor() { }

////  ngOnInit(): void {
////  }

////}
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  @Input() addedToWishlist!: boolean;

  imageitem: string = '';
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    console.log("my product data ", this.productItem);

    console.log("my image flepath ", JSON.stringify(this.productItem.productname));
   
  }

  handleAddToCart() {
    console.log(this.productItem)
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.productid).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.productid).subscribe(() => {
      this.addedToWishlist = false;
    })
  }
}
