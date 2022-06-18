import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductType } from 'src/app/model/product-type';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';

import { CartComponent } from './cart.component';
class MockClass {
  deleteCart() {
    let deleteData = [
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg',
        rating: '4.1',
        total: 22.3,
        quantity: 1,
      },
    ];
    return of(deleteData);
  }
  getCart() {
    let getCartData = [
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg',
        rating: '4.1',
        total: 22.3,
        quantity: 1,
      },
    ];
    return of(getCartData);
  }
}
class MockClassCheckCheckOut {
  deleteCheckout() {
    let checkOutData = [
      {
        GrandtotalPrice: 204.23000000000002,
        Allquantity: 4,
        checkOutProduct: [
          {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description:
              'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: "men's clothing",
            image:
              'https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg',
            rating: '4.1',
            total: 22.3,
            quantity: 1,
          },
        ],
      },
    ];
    return of(checkOutData);
  }
  getCheckout(){
    let getData=[
      {
        "GrandtotalPrice": 204.23000000000002,
        "Allquantity": 4,
        "checkOutProduct": [
          {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg",
            "rating": "4.1",
            "total": 22.3,
            "quantity": 1
          },
        ]
      }
    ]
    return of(getData)
  }
}
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: ProductCartService, useClass: MockClass },
        { provide: CheckoutService, useclass: MockClassCheckCheckOut },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check add', () => {
    let getData: ProductType = {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image: 'https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg',
      rating: '4.1',
      total: 22.3,
      quantity: 1,
    };
  });
  it('should check empty cart', () => {
    component.emptycart();
  });
  it('should check delete data', () => {
    let data = {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image: 'https://m.media-amazon.com/images/I/51NVFc2+ruL._UX679_.jpg',
      rating: '4.1',
      total: 22.3,
      quantity: 1,
    };
    component.deleteCart(data.id);
    expect(component.deleteCart).not.toEqual('');
  });
  it("should check post checkout",()=>{
    component.postCheckOut();
    
  })
  it("should checkout",()=>{
    component.getCheckout();
    expect(component.getCheckout).not.toEqual("")
  })
});
