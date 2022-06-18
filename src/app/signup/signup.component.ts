import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../Services/user-api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hidePassword: Boolean = true;
  userSignup!: string;
  signupfrom = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
  });
  // Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(
    private _httpUserService: UserApiService,
    private _route: Router
  ) {}
  userDataForm: any;
  ngOnInit(): void {}
  signup() {
    // console.log(this.signupfrom.value);
    this._httpUserService.userData(this.signupfrom.value).subscribe((data) => {
      // console.log(data);
      alert('Register Succesfully');
      this._route.navigate(['login']);
    });
  }
  // adddata() {
  //   console.log(this.adminform.value);
  //   this._productservices.addproduct(this.adminform.value).subscribe((data) => {
  //     this.productdata = data;
  //     alert('add succesfully');
  //   });
  // }
}
