import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/Services/cart.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  badge: number = 0;
  @Input() deviceSm!: boolean;
  @Input() deviceXs!: boolean;
  public totalItem: number = 0;
  public searchTerm!: string;
  constructor(
    private cartService: CartService,
    public diloge: MatDialog,
    private _productService: ProductCartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;

      this.getCart();
    });
  }
  getCart() {
    this._productService.getCart().subscribe((data) => {
      this.badge = data.length;
      // console.log(data.length);
    });
  }
  //This method is for open admin diloge box
  adminDialoge() {
    const dialogRef = this.diloge.open(AdminloginComponent);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
