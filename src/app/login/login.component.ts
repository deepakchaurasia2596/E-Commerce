import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentialService } from '../Services/user-credential.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl('', [Validators.required]),
  });

  constructor(
    private _httpUserCredential: UserCredentialService,
    private _route: Router
  ) {}

  ngOnInit(): void {}
  loginuser() {
    // console.log(this.loginform.value);
    let loginUser = this.loginform.value;
    let useremail = loginUser.email;
    let password = loginUser.password;
    this._httpUserCredential.userCredential().subscribe((data: any) => {
      const result = data.find((item: any) => {
        return item.email == useremail && item.password == password;
      });
      if (result) {
        this._route.navigateByUrl('/home');
        alert('login sucessfully');
      } else {
        alert('Please Fill Data Correct');
      }
    });
  }
  
}
