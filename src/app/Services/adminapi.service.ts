import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductType } from '../model/product-type';
@Injectable({
  providedIn: 'root',
})
export class AdminapiService {
  constructor(private _httpadmin: HttpClient) {}
  baseUrl="http://localhost:3000/products"
  adminProduct() {
    return this._httpadmin.get<ProductType>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateproduct(body: ProductType, id: number) {
    return this._httpadmin.put(`${this.baseUrl}/${id}`, body);
  }
  addproduct(body: ProductType) {
    return this._httpadmin.post(this.baseUrl, body);
  }
  deleteproduct(body: any, id: number) {
    return this._httpadmin.delete(`${this.baseUrl}/${id}`, body);
  }
}
