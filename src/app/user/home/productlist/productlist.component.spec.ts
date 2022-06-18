import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';

import { ProductlistComponent } from './productlist.component';
// class MockServices{
//   getProduct(){
//     let getData=[
//       {
//         "id": 1,
//         "title": "Laptop Bag",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "laptop bag",
//         "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg",
//         "rating": "3.9",
//         "total": 109.95,
//         "quantity": 1
//       }
//     ]
//     return of(getData)
//   }
// }
describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,MatDialogModule,BrowserAnimationsModule ], 
      providers: [ProductlistComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check addacart",()=>{
    let item=[
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
    component.addtocart(item);
    expect(component.addtocart).toBeTruthy();
  })
  it("should check open diloge box",()=>{
    component.openDialoge();
    expect(component.openDialoge).toBeTruthy();
  })

});
