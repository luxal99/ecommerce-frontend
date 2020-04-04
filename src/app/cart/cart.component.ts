import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:any=[];
  total = 0;

  constructor(public productService:ProductService) { }

  ngOnInit() {
    this.getCart();
    this.getTotal();
  }

  getCart(){
    this.cartList = [];
    this.cartList = this.productService.getCart();
    console.log(this.cartList);
  }

  getTotal(){
    this.total =this.productService.sum();
  }



}
