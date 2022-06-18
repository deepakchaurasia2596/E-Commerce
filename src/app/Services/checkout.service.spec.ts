import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { checkout } from '../model/checkout';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let HttpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CheckoutService);
    HttpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // -----------test case for cehckoutget---------
  it('should test checkoutService.get', () => {
    const testGet: checkout[] = [
      {
        GrandtotalPrice: 148.24,
        Allquantity: 3,
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
    service.getCheckout().subscribe((data: checkout[]) => {
      expect(testGet).toBe(data, 'should check mocked data');
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testGet);
    HttpTesting.verify();
  });
  // unit test case for postcehckout
  it('should test checkoutService.PostCart', () => {
    const testPost: any = [
      {
        GrandtotalPrice: 148.24,
        Allquantity: 3,
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
    service.postCheckout(testPost).subscribe((addedPost: checkout) => {
      expect(addedPost).toBe(testPost);
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
    HttpTesting.verify();
  });
  // unit test case for putCart
  it('should test checkoutService.putcart', () => {
    const testPut: any = [
      {
        GrandtotalPrice: 148.24,
        Allquantity: 3,
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
    service.putCheckout(testPut, testPut.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testPut);
    });
    const req = HttpTesting.expectOne(service.baseUrl + '/' + testPut.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPut);
    HttpTesting.verify();
  });
  // unit test case for checkoutdelete
  it('should test checkoutService.delete', () => {
    const testDelete: any = [
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
    service.deleteCheckout(testDelete.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testDelete);
    });
    const req = HttpTesting.expectOne(service.baseUrl + '/' + testDelete.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testDelete);
    HttpTesting.verify();
  });
});
