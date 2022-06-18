import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../model/user-type';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  baseurl='http://localhost:3000/user'
  constructor(private _httpUser: HttpClient) {}
  userDataGet() {
    return this._httpUser.get<UserType[]>(this.baseurl);
  }
  userData(data: UserType) {
    return this._httpUser.post<UserType>(this.baseurl, data);
  }
}
