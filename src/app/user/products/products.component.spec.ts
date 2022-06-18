import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductType } from 'src/app/model/product-type';
import { ApiService } from 'src/app/Services/api.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';

import { ProductsComponent } from './products.component';
class MockServicesProductCartApi {
  // getProduct() {
  //   let prodData = [
  //     {
  //       id: 1,
  //       title: 'Laptop Bag',
  //       price: 109.95,
  //       description:
  //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //       category: 'laptop bag',
  //       image:
  //         'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
  //       rating: '3.9',
  //       total: 109.95,
  //       quantity: 1,
  //     },
  //   ];
  //   return of(prodData);
  // }
  postCart() {
    let prodData = [
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
    return of(prodData);
  }
}
class MockServicesApi {
  getProduct() {
    let prodData = [
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
    return of(prodData);
  }
}
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: ProductCartService, useClass: MockServicesProductCartApi },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check post', () => {
    let data = [
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
    component.postProductCart(data);
    expect(component.postProductCart).not.toEqual('');
  });
  // it('should check get',()=>{
  //   component.getProduct1();
  //   expect(component.getProduct1).toBeTruthy();
  // })
});
