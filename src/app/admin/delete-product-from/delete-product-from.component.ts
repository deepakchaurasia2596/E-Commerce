import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AdminapiService } from 'src/app/Services/adminapi.service';
@Component({
  selector: 'app-delete-product-from',
  templateUrl: './delete-product-from.component.html',
  styleUrls: ['./delete-product-from.component.css'],
})
export class DeleteProductFromComponent implements OnInit {
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

  deletedata() {
    // console.log(this.adminform.value);
    this._productservices
      .deleteproduct(this.adminform.value, this.adminform.value.id)
      .subscribe((data) => {
        this.productdata = data;
        alert('delete succesfully');
      });
  }
}
