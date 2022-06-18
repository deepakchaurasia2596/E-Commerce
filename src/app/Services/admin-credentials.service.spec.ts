import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AdminType } from '../model/admin-type';

import { AdminCredentialsService } from './admin-credentials.service';

describe('AdminCredentialsService', () => {
  let service: AdminCredentialsService;
  let HttpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [AdminCredentialsService]
    });
    service = TestBed.inject(AdminCredentialsService);
    HttpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  
  });
  // -----------test case for get---------
  it('should test admincredential.get', () => {
    const testGet: AdminType[] = [
      {
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
      },
    ];
    service.adminCredential().subscribe((data) => {
      expect(testGet).toBe(data, 'should check mocked data');
    });
    const req = HttpTesting.expectOne(service.url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testGet);
    HttpTesting.verify();
  });
  // ------------------unit test for error-----------
  it('should test 404 error',()=>{
    const errorMsg='mock 404 error occured';
    service.adminCredential().subscribe((data)=>{
      fail('failing with error 404');
    },(error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMsg);
    });
    const req=HttpTesting.expectOne(service.url);
    req.flush(errorMsg,{status:404,statusText:"Not Found"});
  })
  it('should be login',()=>{
    service.islogin();
    expect(service.islogin).toBeTruthy();
    
    })
});
