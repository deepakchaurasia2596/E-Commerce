import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from '../model/product-type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: ProductType[]) {
    console.log(product);
    this.cartItemList.push(...product); //use spread operator
    this.productList.next(product);
  }
  addtocart(product: ProductType) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
      
    });
    return grandTotal;
  }
  removeCartItem(product: ProductType) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
