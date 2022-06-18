import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserApiService } from '../Services/user-api.service';

import { SignupComponent } from './signup.component';

// class MockFetchData{
//   userData(){
//     let userFormData=[]
//   }
// }
describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userService: UserApiService;
  let httpUserService: HttpClient;
  let httpController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [SignupComponent],
    }).compileComponents();
    userService = TestBed.inject(UserApiService);
    httpUserService = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });
  it('service created',()=>{
    expect(userService).toBeDefined();
  })
  

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('[Name-Check]-should check name is invalid', () => {
    let name = component.signupfrom.controls['name'];
    expect(name.valid).toBeFalsy();
    expect(name.pristine).toBeTruthy();
    name.setValue('ab');
  });
  it('[Name-Check]-should check name is correct', () => {
    let name = component.signupfrom.controls['name'];
    name.setValue('Deepak Chaurasia');
    expect(name.errors).toBeNull();
  });
  it('[Email-Check]-should check user email address is invalid', () => {
    let email = component.signupfrom.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy(); // expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    //  expect(email.errors['email']).toBeTruthy();
  });
  it('[Email-Check]-should checkuser correct amial address is entered', () => {
    let email = component.signupfrom.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  });
  it('[Password-Check] - should check password errors', () => {
    let pwd = component.signupfrom.controls['password']; // expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('1234'); // expect(pwd.errors['minlength']).toBeTruthy();
  });
  it('[Password-Check] - should check password validity', () => {
    let pwd = component.signupfrom.controls['password'];
    pwd.setValue('123456');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });
  it('[Form-Check]- should check form is valid or not when value is entered', () => {
    component.signupfrom.controls['name'].setValue('deepak chaurasia');
    component.signupfrom.controls['username'].setValue('deepakchaurasia1234');
    component.signupfrom.controls['email'].setValue(
      'deepakchaurasia1234@gmail.com'
    );
    component.signupfrom.controls['password'].setValue('deepak@123');
    expect(component.signupfrom.valid).toBeTruthy();
  });
});
