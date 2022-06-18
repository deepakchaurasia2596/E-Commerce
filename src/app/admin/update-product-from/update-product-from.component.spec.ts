import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdminapiService } from 'src/app/Services/adminapi.service';
import { CartService } from 'src/app/Services/cart.service';
import { UpdateProductFromComponent } from './update-product-from.component';


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
  updateproduct(){
    let adminUpdateItem=[
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
    return of(adminUpdateItem)
  }
}
describe('UpdateProductFromComponent', () => {
  let component: UpdateProductFromComponent;
  let fixture: ComponentFixture<UpdateProductFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductFromComponent ],
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [{provide:AdminapiService,useClass:MockClass}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductFromComponent);
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
  it("should check update data",()=>{
    component.updatedata();
    expect(component.updatedata).not.toEqual("");
  })
});
