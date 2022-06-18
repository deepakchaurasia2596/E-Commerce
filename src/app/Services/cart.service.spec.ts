import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductType } from '../model/product-type';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let HttpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
    HttpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be product', () => {
    service.getProducts();
    expect(service.productList).toBeTruthy();
  });
  it('should grand total', () => {
    service.getTotalPrice();
    expect(service.getTotalPrice).toBeTruthy();
  });
  it('should check remove cart item', () => {
    let productItem: ProductType = {
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
    };
    service.removeCartItem(productItem);
    expect(service.productList).toBeTruthy();
  });
  it('should check remove all cart', () => {
    service.removeAllCart();
    expect(service.productList).toBeTruthy();
  });
  it('should set product', () => {
    let productItem: ProductType[] = [
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
    service.setProduct(productItem);
    expect(service.cartItemList).toBeTruthy();
    expect(service.productList).toBeTruthy();
  });
  it('should check add to cart', () => {
    let productItem: ProductType = {
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
    };
    service.addtocart(productItem);
    expect(service.cartItemList).toBeTruthy();
    expect(service.productList).toBeTruthy();
    expect(service.getTotalPrice).toBeTruthy();
  });
});
