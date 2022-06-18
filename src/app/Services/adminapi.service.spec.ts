import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminapiService } from './adminapi.service';

describe('AdminapiService', () => {
  let service: AdminapiService;
  let HttpTesting:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [AdminapiService]
    });
    service = TestBed.inject(AdminapiService);
    HttpTesting=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   // -----------test case for get---------
   it('should test adminapi.get', () => {
    const testGet: any   = [
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
    service.adminProduct().subscribe((data) => {
      expect(testGet).toBe(data, 'should check mocked data');
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testGet);
    HttpTesting.verify();
  });
  // unit test case for putCart
  it('should test adminapi.putcart', () => {
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
    service.updateproduct(testPut,testPut.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testPut);
    });
    const req = HttpTesting.expectOne(service.baseUrl+"/"+testPut.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPut);
    HttpTesting.verify();
  });
   // unit test case for post
   it('should test adminapi.PostCart', () => {
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
    service.addproduct(testPost).subscribe((addedPost) => {
      expect(addedPost).toBe(testPost);
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
    HttpTesting.verify();
  });
  // unit test case for delete
  it('should test admiapi.delete', () => {
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
    service.deleteproduct(testDelete,testDelete.id).subscribe((addedPost) => {
      expect(addedPost).toBe(testDelete);
    });
    const req = HttpTesting.expectOne(service.baseUrl+"/"+testDelete.id);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testDelete);
    HttpTesting.verify();
  });
});
