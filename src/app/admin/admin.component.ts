import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminapiService } from '../Services/adminapi.service';
import { AddProductFromComponent } from './add-product-from/add-product-from.component';
import { DeleteProductFromComponent } from './delete-product-from/delete-product-from.component';
import { UpdateProductFromComponent } from './update-product-from/update-product-from.component';
import { UserSignupDataComponent } from './user-signup-data/user-signup-data.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'image'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public productdata: any = [];
  public products: any = [];
  public grandTotal: number = 0;

  constructor(
    private cartService: CartService,
    private _productservices: AdminapiService,
    public diloge: MatDialog,
    private _router: Router
  ) {}
  ngAfterViewInit(): void {}
  logout() {
    localStorage.removeItem('email');
    this._router.navigate(['']);
  }
  addDialoge() {
    this.diloge.open(AddProductFromComponent);
  }
  deleteDialoge() {
    this.diloge.open(DeleteProductFromComponent);
  }
  updateDialoge() {
    this.diloge.open(UpdateProductFromComponent);
  }
  userSignedDialoge() {
    this.diloge.open(UserSignupDataComponent, { width: '80%' });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.adminProductItem();
  }
  adminProductItem(){
    this._productservices.adminProduct().subscribe((data) => {
      this.productdata = data;
      this.dataSource = new MatTableDataSource<any>(this.productdata);
      this.dataSource.paginator = this.paginator;
    });
  }
}
