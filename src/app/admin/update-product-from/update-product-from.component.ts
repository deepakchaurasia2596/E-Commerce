import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AdminapiService } from 'src/app/Services/adminapi.service';

@Component({
  selector: 'app-update-product-from',
  templateUrl: './update-product-from.component.html',
  styleUrls: ['./update-product-from.component.css'],
})
export class UpdateProductFromComponent implements OnInit {
  public productdata: any;
  public products: any = [];
  public grandTotal: number = 0;
  adminform = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl(''),
    discription: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
  });
  // display() {
  //   // console.log(this.adminform.value);
  // }
  constructor(
    private cartService: CartService,
    private _productservices: AdminapiService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this._productservices.adminProduct().subscribe((data) => {
      this.productdata = data;
    });
  }
  updatedata() {
    // console.log(this.adminform.value);
    this._productservices
      .updateproduct(this.adminform.value, this.adminform.value.id)
      .subscribe((data) => {
        this.productdata = data;
        alert('update succesfully');
      });
  }
}
