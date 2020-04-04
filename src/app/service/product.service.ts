import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  private cart: Array<any> = [];



  public getProduct(): Array<Product> {
    return this.products
  }

  private products: Array<Product> = [

  }

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

  addToCart(product: Object) {
    console.log(product);
    
    this.cart.push(product)

    
  }

  getCart(){
    return this.cart;
  }
}




