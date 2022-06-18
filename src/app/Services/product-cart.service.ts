import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../model/product-type';
@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  constructor(private _productHttp: HttpClient) {}
  baseUrl = 'http://localhost:3000/cart';
  getCart() {
    return this._productHttp.get<ProductType[]>(this.baseUrl);
  }
  postCart(body: ProductType) {
    return this._productHttp.post<ProductType>(this.baseUrl, body);
  }
  putCart(body: ProductType, id: number) {
    return this._productHttp.put(`${this.baseUrl}/` + id, body);
  }
  deleteCart(id: number) {
    return this._productHttp.delete(`${this.baseUrl}/` + id);
  }
}
