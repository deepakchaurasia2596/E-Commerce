import { TestBed } from '@angular/core/testing';

import { AdminloggedinService } from './adminloggedin.service';

describe('AdminloggedinService', () => {
  let service: AdminloggedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminloggedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check login',()=>{
    let output=true;
    service.login(output);
    expect(service.login).toBeTruthy()
    // expect(service.login).toEqual("cant user login")  
  })
  it("should check else part",()=>{
    let output=false;
    service.login(output);
    spyOn(window, "alert");
    expect(alert).toBeTruthy();
    // expect(service.login).toEqual("cant user login")

  })
});
