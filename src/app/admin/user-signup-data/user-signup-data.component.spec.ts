import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserApiService } from 'src/app/Services/user-api.service';

import { UserSignupDataComponent } from './user-signup-data.component';
class MockClass{
  userDataGet(){
    let userData=[
      {
        "name": "Deepak Chaurasia",
        "username": "deepakchaurasia2596",
        "email": "deepakchauarsia2596@gmail.com",
        "password": "123456",
        "id": 1
      }
    ]
    return of(userData)
  }
}
describe('UserSignupDataComponent', () => {
  let component: UserSignupDataComponent;
  let fixture: ComponentFixture<UserSignupDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSignupDataComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [{provide:UserApiService,useClass:MockClass
      }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('service created', () => {
    expect(UserApiService).toBeDefined();
  });
});
