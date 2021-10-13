////export class Product {
////}
export class Product {
  productid: number;
  productname: string;
  description: string;
  price: number;
  imageurl: string;

  constructor(productid: any, productname: any, description = '', price = 0, imageurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this.productid = productid
    this.productname = productname
    this.description = description
    this.price = price
    this.imageurl = imageurl
  }
}
