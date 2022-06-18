import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/model/product-type';
import { ApiService } from 'src/app/Services/api.service';
// import { CartService } from 'src/app/Services/cart.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';
@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css'],
})
export class ProductDetailedViewComponent implements OnInit {
  userRoute!: ProductType;
  img!: ProductType;
  id!: Number;
  public productList!: ProductType;
  searchKey: string = '';
  flag: boolean = true;
  constructor(
    private _httpApi: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductCartService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
   this.getProductById();
  }
  getProductById(){
    this._httpApi.getProductById(this.id).subscribe((data) => {
      this.userRoute = data;
      this.flag = false;
      // console.log(this.userRoute);
    });
    this.getProduct();
  }
  getProduct() {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
  postProductCart(body: ProductType) {
    this._productService.postCart(body).subscribe((data) => {
      // console.log(data);
    });
  }
  // addtocart(item: string) {
  //   this.cartService.addtocart(item);
  // }
}
