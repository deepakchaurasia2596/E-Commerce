import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
// import { ApiService } from 'src/app/Services/api.service';
// import { CartService } from 'src/app/Services/cart.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = '';
  flag: boolean = true;
  constructor(
    private _productService: ProductCartService,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    this.getProduct1();
  }

  getProduct1() {
    this.api.getProduct().subscribe((res) => {
      this.flag = false;
      this.productList = res;
    });
  }

  postProductCart(body: any) {
    this._productService.postCart(body).subscribe((data) => {
      // console.log(data);
    });
  }
  // constructor(private api: ApiService, private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.api.getProduct().subscribe((res) => {
  //     this.flag = false;
  //     this.productList = res;
  //     this.productList.forEach((a: any) => {
  //       Object.assign(a, { quantity: 1, total: a.price });
  //     });
  //   });
  //   this.cartService.search.subscribe((val: any) => {
  //     this.searchKey = val;
  //   });
  // }
  // addtocart(item: any) {
  //   this.cartService.addtocart(item);
  // }
}
