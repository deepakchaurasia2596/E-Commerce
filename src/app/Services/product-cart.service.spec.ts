import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { identifierName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { ProductType } from '../model/product-type';

import { ProductCartService } from './product-cart.service';

describe('ProductCartService', () => {
  let service: ProductCartService;
  let HttpTesting:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [ProductCartService]
    });
    service = TestBed.inject(ProductCartService);
    HttpTesting=TestBed.inject(HttpTestingController)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(()=>{
    HttpTesting.verify();
  })
    // -----------test case for get---------
    it('should test UserCredentialHttpClient.get', () => {
      const testGet: ProductType[] = [
        {
          id: 1,
          title: 'Laptop Bag',
          price: 109.95,
          description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: 'laptop bag',
          image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
          rating:'3.9',
          total:109.95,
          quantity:1,
        },
      ];
      service.getCart().subscribe((data: ProductType[]) => {
        expect(testGet).toBe(data, 'should check mocked data');
      });
      const req = HttpTesting.expectOne(service.baseUrl);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');
      req.flush(testGet);
      HttpTesting.verify();
    });
     // unit test case for post
  it('should test UserApiHttpClient.PostCart', () => {
    const testPost: any = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating:'3.9',
        total:109.95,
        quantity:1,
      },
    ];
    service.postCart(testPost).subscribe((addedPost: ProductType) => {
      expect(addedPost).toBe(testPost);
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
    HttpTesting.verify();
  });
   // unit test case for putCart
   it('should test UserApiHttpClient.putcart', () => {
    const testPut: any = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating:'3.9',
        total:109.95,
        quantity:1,
      },
    ];
    service.putCart(testPut,testPut.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testPut);
    });
    const req = HttpTesting.expectOne(service.baseUrl+"/"+testPut.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPut);
    HttpTesting.verify();
  });
  // unit test case for delete
  it('should test UserApiHttpClient.delete', () => {
    const testDelete: any = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating:'3.9',
        total:109.95,
        quantity:1,
      },
    ];
    service.deleteCart(testDelete.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testDelete);
    });
    const req = HttpTesting.expectOne(service.baseUrl+"/"+testDelete.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testDelete);
    HttpTesting.verify();
  });
     // ------------------unit test for error-----------
  it('should test 404 error',()=>{
    const errorMsg='mock 404 error occured';
    service.getCart().subscribe((data)=>{
      fail('failing with error 404');
    },(error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMsg);
    });
    const req=HttpTesting.expectOne(service.baseUrl);
    req.flush(errorMsg,{status:404,statusText:"Not Found"});
  })
  
});
