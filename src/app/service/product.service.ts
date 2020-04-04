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

    if (this.cart.length===0) {
      this.cart.push(product);
    }else{
      this.cart.forEach(element => {
        if (element.idProduct === product.idProduct) {
          element.orderAmount++;
          
        }else{
         this.cart.push(product);
   
        }
       });
    }


  

  }

  getCart() {
    return this.cart;
  }

  sum() {
    this.total = 0;
    this.cart.forEach(element => {
      this.total += (element.price) * (element.orderAmount);
      console.log(this.total);

    });

    return this.total;
  }
}




