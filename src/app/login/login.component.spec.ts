import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserType } from '../model/user-type';
import { UserCredentialService } from '../Services/user-credential.service';

import { LoginComponent } from './login.component';
class MockClass{
  userCredential(){
    let userCredData : UserType[]=[
      {
        "name": "Deepak Chaurasia",
        "username": "deepakchaurasia2596",
        "email": "deepakchauarsia2596@gmail.com",
        "password": "123456",
        "id": 1
      },
    ]
    return of(userCredData);
  }
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule], 
      providers: [ LoginComponent,{provide:UserCredentialService,useClass:MockClass}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('service created',()=>{
    expect(UserCredentialService).toBeDefined();
  })
  it('should check login',()=>{
    component.loginuser();
    expect(component.loginuser).not.toEqual("")
  })
});
