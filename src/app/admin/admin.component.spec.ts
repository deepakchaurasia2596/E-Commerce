import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductType } from '../model/product-type';
import { AdminapiService } from '../Services/adminapi.service';
import { CartService } from '../Services/cart.service';

import { AdminComponent } from './admin.component';
class MockServices{
  getProducts(){
    let getData :ProductType[]=[
      {
        "id": 1,
        "title": "Laptop Bag",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "laptop bag",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg",
        "rating": "3.9",
        "total": 109.95,
        "quantity": 1
      }
    ]
    return of(getData);
  }
  getTotalPrice(){
    let total=[
      {
        "id": 1,
        "title": "Laptop Bag",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "laptop bag",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg",
        "rating": "3.9",
        "total": 109.95,
        "quantity": 1
      }
    ]
    return of(total)
  }
}
class AdminMockServices{
  adminProduct(){
    let adminPrd=[
      {
        "id": 1,
        "title": "Laptop Bag",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "laptop bag",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg",
        "rating": "3.9",
        "total": 109.95,
        "quantity": 1
      }
    ]
    return of(adminPrd)
  }
}
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,MatDialogModule,RouterTestingModule,BrowserAnimationsModule ], 
      providers: [{provide:CartService,useClass:MockServices},{provide:AdminapiService,useClass:AdminMockServices}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('service created',()=>{
    expect(CartService).toBeDefined();
  })
  it('service created',()=>{
    expect(AdminapiService).toBeDefined();
  })
  it("should check logout",()=>{
    component.logout();
    expect(component.logout).toBeTruthy();
  })
  it("should check addDiloge",()=>{
    component.addDialoge();
    expect(component.addDialoge).toBeTruthy();
  })
  it("should check deleteDiloge",()=>{
    component.deleteDialoge();
    expect(component.deleteDialoge).toBeTruthy();
  })
  it("should check updateDiloge",()=>{
    component.updateDialoge();
    expect(component.updateDialoge).toBeTruthy();
  })
  it("should check userSignDiloged",()=>{
    component.userSignedDialoge();
    expect(component.userSignedDialoge).toBeTruthy();
  })
  it("should check ngoninit",()=>{
    component.ngOnInit();
    expect(component.products).not.toEqual("")
  })
  it("should check admin product",()=>{
    component.adminProductItem();
    expect(component.adminProductItem).not.toEqual("")
  })
});
