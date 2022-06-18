import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CheckoutService } from 'src/app/Services/checkout.service';

import { CheckoutComponent } from './checkout.component';

class MockFetchData {
  getCheckout() {
    let checkoutDataItem = [
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
    return of(checkoutDataItem)
  }
}
describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers:[{provide:CheckoutService,useClass:MockFetchData}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be check getData',()=>{
    component.checkoutProduct();
    expect(component.checkotdata).not.toEqual("");
  })
});
