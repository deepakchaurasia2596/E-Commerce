import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserType } from '../model/user-type';

import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;
  let HttpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [UserApiService],
    });
    service = TestBed.inject(UserApiService);
    HttpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    HttpTesting.verify();
  });
  // unit test case for userDataGet function of get
  it('should test UserApiHttpClient.get', () => {
    const testGet: UserType[] = [
      {
        id: 1,
        name: 'Deepak Chaurasia',
        username: 'deepakchaurasia2596',
        email: 'deepakchauarsia2596@gmail.com',
        password: '123456',
      },
    ];
    service.userDataGet().subscribe((data: UserType[]) => {
      expect(testGet).toBe(data, 'should check mocked data');
    });
    const req = HttpTesting.expectOne(service.baseurl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testGet);
    HttpTesting.verify();
  });
  // unit test case for post
  it('should test UserApiHttpClient.Post', () => {
    const testPost: UserType = 
      {
        id: 1,
        name: 'Deepak Chaurasia',
        username: 'deepakchaurasia2596',
        email: 'deepakchauarsia2596@gmail.com',
        password: '123456',
      }
    ;
    service.userData(testPost).subscribe((addedPost: UserType) => {
      expect(addedPost).toBe(testPost);
    });
    const req = HttpTesting.expectOne(service.baseurl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
    HttpTesting.verify();
  });
  // -----unit test for error--------------------
  it('should test 404 error', () => {
    const errorMsg = 'mock 404 error occured';
    service.userDataGet().subscribe(
      (data) => {
        fail('failing with error 404');
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMsg);
      }
    );
    const req = HttpTesting.expectOne(service.baseurl);
    req.flush(errorMsg, { status: 404, statusText: 'Not Found' });
  });
});
