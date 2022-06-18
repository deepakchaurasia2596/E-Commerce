import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AdminapiService } from 'src/app/Services/adminapi.service';
@Component({
  selector: 'app-add-product-from',
  templateUrl: './add-product-from.component.html',
  styleUrls: ['./add-product-from.component.css'],
})
export class AddProductFromComponent implements OnInit {
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
    rating: new FormControl(''),
  });
  constructor(
    private cartService: CartService,
    private _productservices: AdminapiService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.adminProductGet();
  }
  adminProductGet(){
    this._productservices.adminProduct().subscribe((data) => {
      this.productdata = data;
    });
  }

  adddata() {
    // console.log(this.adminform.value);
    this._productservices.addproduct(this.adminform.value).subscribe((data) => {
      this.productdata = data;
      alert('add succesfully');
    });
  }
}
