import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { checkout } from '../model/checkout';
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private _checkouthttp: HttpClient) {}
  baseUrl = 'http://localhost:3000/checkOut';
  getCheckout() {
    return this._checkouthttp.get<checkout[]>(this.baseUrl);
  }
  postCheckout(body: checkout) {
    return this._checkouthttp.post<checkout>(this.baseUrl, body);
  }
  putCheckout(body: checkout, id: number) {
    return this._checkouthttp.put<checkout>(`${this.baseUrl}/` + id, body);
  }
  deleteCheckout(id: number) {
    return this._checkouthttp.delete<checkout>(`${this.baseUrl}/` + id);
  }
}
