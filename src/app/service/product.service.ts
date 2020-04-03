import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  public getProduct(): Array<any> {

    var products: any = [];
    this.getAllProducts().subscribe(data=>{
      console.log(data);
      data =products
    })

    console.log(products);
    
    return products;
  }

  

  findProductById(idProduct: Number) {

    var product = this.getProduct().find(product => product.idProduct == idProduct);
    console.log(product);
    return product;

  }

    getAllProducts(){
    return this.http.get("api/getAllProducts",{responseType:'json'}); 
  }

}




