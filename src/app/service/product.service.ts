import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  total = 0;
  private cart: Array<any> = [];
  private set = new Set(this.cart);

  constructor(public http: HttpClient) { }


  getAllProducts() {
    return this.http.get("api/getAllProducts", { responseType: 'json' });
  }

  addToCart(product) {
    this.set.add(product);
  }

  increaseValue(product) {
    this.set.forEach(element => {
      if (element.idProduct === product.idProduct) {
        element.orderAmount = product.orderAmount;
      }
    });
  }

  getCart() {
    return this.set;
  }

  sum() {
    this.total = 0;
    this.set.forEach(element => {


      this.total += (element.price) * (element.orderAmount);
    });

    return this.total;
  }

  deleteProduct(product) {
    this.set.delete(product);
  }
}




