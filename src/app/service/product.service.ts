import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }


  getAllProducts() {
    return  this.http.get("api/getAllProducts", { responseType: 'json' });

  }
}




