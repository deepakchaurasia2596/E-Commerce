import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/Services/checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private _httpcheckoutService: CheckoutService) {}
  checkotdata: any = [];
  totalQuantity: any;
  totalPrice: any;
  flag: boolean = false;
  ngOnInit(): void {
    this.checkoutProduct();
  }
  checkoutProduct() {
    this._httpcheckoutService.getCheckout().subscribe((data) => {
      this.checkotdata = data;
      this.totalQuantity = data[0].Allquantity;
      this.totalPrice = data[0].GrandtotalPrice;
      console.log(this.totalQuantity);
      console.log(data);

      this.flag = true;
    });
  }
}
