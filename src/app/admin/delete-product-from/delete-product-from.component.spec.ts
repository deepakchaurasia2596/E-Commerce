import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdminapiService } from 'src/app/Services/adminapi.service';
import { CartService } from 'src/app/Services/cart.service';

import { DeleteProductFromComponent } from './delete-product-from.component';
class MockClass{
  adminProduct(){
    let adminItem=[
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
      },
    ]
    return of(adminItem)
  }
  deleteproduct(){
    let adminDeleteItem=[
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
      },
    ]
    return of(adminDeleteItem)
  }
}
describe('DeleteProductFromComponent', () => {
  let component: DeleteProductFromComponent;
  let fixture: ComponentFixture<DeleteProductFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductFromComponent ],
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [DeleteProductFromComponent,{provide:AdminapiService,useClass:MockClass}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductFromComponent);
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
  it("should check delete data",()=>{
    component.deletedata();
    expect(component.deletedata).not.toEqual("");
  })
});
