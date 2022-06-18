import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminCredentialsService } from 'src/app/Services/admin-credentials.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  adminloginform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private httpCredential: AdminCredentialsService,
    private _route: Router
  ) {}

  ngOnInit(): void {}
  adminFormData() {
    let userEnterData = this.adminloginform.value;
    let enterUserName = userEnterData.username.toLowerCase();
    let enteremail = userEnterData.email.toLowerCase();
    let enterPassword = userEnterData.password;
    this.httpCredential.adminCredential().subscribe((res: any) => {
      const result = res.find((item: any) => {
        return (
          item.username == enterUserName &&
          item.email == enteremail &&
          item.password == enterPassword
        );
      });
      if (result) {
        this._route.navigateByUrl('/admin');
        localStorage.setItem('email', result.email);
        alert('SuccessFully login');
      } else {
        alert('Please Fill Data Correct');
      }
    });
  }
}
