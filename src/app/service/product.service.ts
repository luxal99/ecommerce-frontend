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

  constructor(public http: HttpClient) { }


  getAllProducts() {
    return this.http.get("api/getAllProducts", { responseType: 'json' });

  }

  addToCart(product) {
    this.cart.push(product)
  }

  getCart() {
    var set = [... new Set(this.cart)]
    return set;
  }

  sum() {
    this.total = 0;
    var set = [... new Set(this.cart)]
    
    set.forEach(element => {
      this.total += (element.price) * (element.orderAmount);
      console.log(this.total);

    });

    return this.total;
  }
}




