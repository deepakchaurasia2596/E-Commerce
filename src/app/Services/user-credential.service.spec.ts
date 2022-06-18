import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserType } from '../model/user-type';

import { UserCredentialService } from './user-credential.service';

describe('UserCredentialService', () => {
  let service: UserCredentialService;
  let HttpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [UserCredentialService],
    });
    service = TestBed.inject(UserCredentialService);
    HttpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(()=>{
    HttpTesting.verify();
  })
  // -----------test case for get---------
  it('should test UserCredentialHttpClient.get', () => {
    const testGet: UserType[] = [
      {
        id: 1,
        name: 'Deepak Chaurasia',
        username: 'deepakchaurasia2596',
        email: 'deepakchauarsia2596@gmail.com',
        password: '123456',
      },
    ];
    service.userCredential().subscribe((data: UserType[]) => {
      expect(testGet).toBe(data, 'should check mocked data');
    });
    const req = HttpTesting.expectOne(service.baseUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testGet);
    HttpTesting.verify();
  });
  // ------------------unit test for error-----------
  it('should test 404 error',()=>{
    const errorMsg='mock 404 error occured';
    service.userCredential().subscribe((data)=>{
      fail('failing with error 404');
    },(error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMsg);
    });
    const req=HttpTesting.expectOne(service.baseUrl);
    req.flush(errorMsg,{status:404,statusText:"Not Found"});
  })
});
