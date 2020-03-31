import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProduct(): Array<Product> {
    return this.products
  }

  private products: Array<Product> = [
    { idProduct: 1, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 2, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 3, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 4, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 5, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 6, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 7, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' },
    { idProduct: 8, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png' }

  ]

  findProductById(idProduct: Number) {
    return this.getProduct().find((product: Product) => {
      return product.idProduct = idProduct
    })

  }

}




