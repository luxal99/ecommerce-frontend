import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private cart: Array<any> = [];

  constructor(public http: HttpClient) { }


  getAllProducts() {
    return this.http.get("api/getAllProducts", { responseType: 'json' });

  }

  addToCart(product: Object) {
    console.log(product);

    this.cart.push(product)


  }

  getCart() {
    return this.cart;
  }
}




