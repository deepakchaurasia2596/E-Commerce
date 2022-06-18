import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../user/home/home.component';

import { AuthguardGuard } from './authguard.guard';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;
  let router:Router
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([{
          path: 'home',
          component: HomeComponent,
        }]),
      ],
      providers: [AuthguardGuard],
    });
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  // it('should be check guard', () => {
  //   spyOn(window,'alert');
  //   guard.canActivate();
  //   expect(alert).toHaveBeenCalled();
  // });
  // it("should check router",()=>{
  //   guard.canActivate();
  //   spyOn(window,'alert');
  //   expect(guard.canActivate).toBeTruthy();
  // })
  // it("should check guard",()=>{
  //   spyOn(router,'navigate');
  //   guard.canActivate();
  //   expect(router.navigate).toHaveBeenCalledWith(['home'])
  // })
});
