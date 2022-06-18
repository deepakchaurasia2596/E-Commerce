import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  constructor(
    private api: ApiService,
    private cartService: CartService,
    public diloge: MatDialog
  ) {}
  openDialoge() {
    this.diloge.open(ProductlistComponent);
  }
  public productList: any;
  searchKey: string = '';
  flag: boolean = true;
  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.flag = false;
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  //this method is used to add to cart item
  addtocart(item: any) {
    this.cartService.addtocart(item);
  }
}
