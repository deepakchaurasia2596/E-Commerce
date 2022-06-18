import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminType } from '../model/admin-type';
@Injectable({
  providedIn: 'root',
})
export class AdminCredentialsService {
  public url: string = 'http://localhost:3000/admin';
  constructor(private _httpAdminCredentials: HttpClient) {}

  adminCredential() {
    return this._httpAdminCredentials.get<AdminType[]>(`${this.url}`);
  }
  islogin() {
    return !!localStorage.getItem('email');
  }
}
