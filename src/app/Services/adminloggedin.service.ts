import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminloggedinService {
  login(output:any) {
    let userlogin = output;
    if (userlogin === true) {
      return userlogin;
    } else {
      alert('cant user login');
    }
  }
  constructor() {}
}
