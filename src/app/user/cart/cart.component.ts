import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductType } from 'src/app/model/product-type';
import { CartService } from 'src/app/Services/cart.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'image',
    'description',
    'price',
    'quantity',
    'total',
    'delete',
  ];

  dataSource: MatTableDataSource<ProductType> =
    new MatTableDataSource<ProductType>();
  public products: ProductType[] = [];
  totalQuantity: number = 0;
  public grandTotal: number = 0;
  constructor(
    private cartService: CartService,
    private _productService: ProductCartService,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.getCheckout();
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      // console.log(res);
      this.dataSource = new MatTableDataSource<ProductType>(this.products);
      // console.log(this.dataSource.filteredData);
    });
    this.getCart();
  }
  // ----------------method for increment the product item-----------------
  add(data1: ProductType) {
    // console.log(data1);
    // console.log(this.dataSource.filteredData.indexOf(data1));
    let ele = this.dataSource.filteredData.indexOf(data1);
    let itemQuantity = ++this.dataSource.filteredData[ele].quantity;
    this.dataSource.filteredData[ele].total =
      itemQuantity * this.dataSource.filteredData[ele].price;
    // console.log(this.dataSource.filteredData[ele].total);
    // console.log(itemQuantity);
    let sum = 0;
    for (let i of this.dataSource.filteredData) {
      sum = sum + i.total;
    }
    // console.log(sum);
    this.grandTotal = sum;
    let quan1 = 0;
    for (let i of this.dataSource.filteredData) {
      quan1 = quan1 + i.quantity;
    }
    // console.log(quan1);
    this.totalQuantity = quan1;
    this.body = {
      GrandtotalPrice: this.grandTotal,
      Allquantity: this.totalQuantity,
      checkOutProduct: this.dataSource.filteredData,
    };
  }
  // ----------------method for decrement the product item-----------------
  subtract(data1: ProductType) {
    // console.log(data1);
    // console.log(this.dataSource.filteredData.indexOf(data1));
    let ele = this.dataSource.filteredData.indexOf(data1);
    if (this.dataSource.filteredData[ele].quantity > 1) {
      let ele = this.dataSource.filteredData.indexOf(data1);
      let itemQuantity = --this.dataSource.filteredData[ele].quantity;
      this.dataSource.filteredData[ele].total =
        itemQuantity * this.dataSource.filteredData[ele].price;
      let sum = 0;
      for (let i of this.dataSource.filteredData) {
        sum = sum + i.total;
      }
      // console.log(sum);
      this.grandTotal = sum;
    }
    let quan1 = 0;
    for (let i of this.dataSource.filteredData) {
      quan1 = quan1 + i.quantity;
    }
    // console.log(quan1);
    this.totalQuantity = quan1;
    this.body = {
      GrandtotalPrice: this.grandTotal,
      Allquantity: this.totalQuantity,
      checkOutProduct: this.dataSource.filteredData,
    };
  }

  emptycart() {
    this.products = [];
  }

  getCart() {
    this._productService.getCart().subscribe((data) => {
      this.products = data;
      let cartTotalPrice = 0;
      for (let i of data) {
        cartTotalPrice = cartTotalPrice + i.total;
      }
      // console.log(cartTotalPrice)

      this.dataSource = new MatTableDataSource<ProductType>(this.products);
      this.grandTotal = cartTotalPrice;
      let sum = 0;
      for (let i of this.dataSource.filteredData) {
        sum = sum + i.total;
      }
      // console.log(sum);
      this.grandTotal = sum;
      let quan1 = 0;
      for (let i of this.dataSource.filteredData) {
        quan1 = quan1 + i.quantity;
      }
      // console.log(quan1);
      this.totalQuantity = quan1;
      this.body = {
        GrandtotalPrice: this.grandTotal,
        Allquantity: this.totalQuantity,
        checkOutProduct: this.dataSource.filteredData,
      };
    });
  }
  deleteCart(id: number) {
    this._productService.deleteCart(id).subscribe((data) => {
      this.getCart();
    });
  }
  body: any = {
    GrandtotalPrice: this.grandTotal,
    Allquantity: this.totalQuantity,
    checkOutProduct: this.dataSource.filteredData,
  };

  checkOutData: any[] = [];
  // -----------------------------checkout-crud--------------------
  postCheckOut() {
    this.getCheckout();
    // console.log(this.checkOutData.length);
    if (this.checkOutData.length === 0) {
      this._checkoutService.postCheckout(this.body).subscribe((data) => {
        // console.log(data);
      });
    } else if (this.checkOutData.length === 1) {
      this.getCheckout();
      this._checkoutService.putCheckout(this.body, 1).subscribe((data) => {
        // console.log(data);
      });
    }
  }
  getCheckout() {
    this._checkoutService.getCheckout().subscribe((data) => {
      // console.log(data);
      this.checkOutData = data;
    });
  }
}
