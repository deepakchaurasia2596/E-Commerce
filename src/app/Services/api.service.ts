import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductType } from '../model/product-type';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/products';
  getProduct() {
    return this.http.get<ProductType>(this.baseUrl);
  }
  getProductById(id: Number) {
    return this.http.get<ProductType>(`${this.baseUrl}/${id}`);
  }
}
