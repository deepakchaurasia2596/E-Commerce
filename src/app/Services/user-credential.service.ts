import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../model/user-type';
@Injectable({
  providedIn: 'root',
})
export class UserCredentialService {
  constructor(private _httpuser: HttpClient) {}
  baseUrl="http://localhost:3000/user"
  userCredential() {
    return this._httpuser.get<UserType[]>(this.baseUrl);
  }
}
