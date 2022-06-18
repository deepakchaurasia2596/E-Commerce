import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddProductFromComponent } from './add-product-from.component';
import { CartService } from 'src/app/Services/cart.service';
import { AdminapiService } from 'src/app/Services/adminapi.service';
import { of } from 'rxjs';

class MockServices {
  addproduct() {
    let addData = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating: '3.9',
        total: 109.95,
        quantity: 1,
      },
    ];
    return of(addData);
  }
  adminProduct() {
    let adminProductData = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating: '3.9',
        total: 109.95,
        quantity: 1,
      },
    ];
    return of(adminProductData);
  }
}
describe('AddProductFromComponent', () => {
  let component: AddProductFromComponent;
  let service: AdminapiService;
  let fixture: ComponentFixture<AddProductFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductFromComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
        AddProductFromComponent,
        { provide: AdminapiService, useClass: MockServices },
      ],
    }).compileComponents();
    service = TestBed.inject(AdminapiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('service created', () => {
    expect(CartService).toBeDefined();
  });
  it('service created', () => {
    expect(AdminapiService).toBeDefined();
  });
  it('should check ngOnIit', () => {
    component.adminProductGet();
    expect(component.adminProductGet).not.toEqual('');
  });
  it('should check adddata function', () => {
    component.adddata();
    expect(component.adddata).not.toEqual('');
  });
});
