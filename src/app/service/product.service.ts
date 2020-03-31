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
    {
      idProduct: 1, title: 'Product 1', price: '99$', image: 'assets/img/6910486_preview.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
      , amount: 5
    },
    { idProduct: 2, title: 'Product 2', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 3, title: 'Product 3', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 4, title: 'Product 4', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 5, title: 'Product 5', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 6, title: 'Product 6', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 7, title: 'Product 7', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 },
    { idProduct: 8, title: 'Product 8', price: '99$', image: 'assets/img/6910486_preview.png',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially '
    , amount: 5 }

  ]

  findProductById(idProduct: Number) {

    var product = this.getProduct().find(product => product.idProduct == idProduct);
    console.log(product);
    return product;

  }

}




