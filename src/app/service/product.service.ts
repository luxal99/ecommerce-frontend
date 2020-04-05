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

  uploadPicture(picutre) {
    return this.http.post("api/admin/upload", picutre, { responseType: 'text' });
  }

  saveProduct(product) {
    return this.http.post("api/admin/saveProduct", product, { responseType: 'json' });
  }
  getAllProducts() {
    return this.http.get("api/getAllProducts", { responseType: 'json' });
  }

  getProductByCompanyId(idCompany) {
    return this.http.get("api/admin/getProduct/" + idCompany, { responseType: 'json' });
  }

  deleteProduct(idProduct) {
    return this.http.delete('api/admin/deleteProduct/' + idProduct, { responseType: 'text' });
  }

  updateProduct(product) {
    return this.http.put('api/admin/updateProduct', product, { responseType: 'json' });
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

  deleteFromCart(product) {
    this.set.delete(product);
  }


  addToCart(product: Object) {
    console.log(product);

    this.set.add(product)


  }


}




