import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  public getProduct(): Array<Product> {
    return this.products
  }

  private products: Array<Product> = [
 
  ]

  findProductById(idProduct: Number) {

    var product = this.getProduct().find(product => product.idProduct == idProduct);
    console.log(product);
    return product;

  }

  uploadPicture(picutre){
    return this.http.post("api/admin/upload",picutre,{responseType:'text'});
  }

  saveProduct(product){
    return this.http.post("api/admin/saveProduct",product,{responseType:'json'});
  }
  getAllProducts(){
    return this.http.get("api/getAllProducts",{responseType:'json'}); 
  }

  deleteProduct(idProduct){
    return this.http.delete('api/admin/deleteProduct/'+idProduct,{responseType:'text'});
  }

  updateProduct(product){
    return this.http.put('api/admin/updateProduct',product,{responseType:'json'});
  }
}




