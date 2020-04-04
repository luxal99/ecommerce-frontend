import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:any=[];
  amountCounter = 0;
  total = 0;

  constructor(public productService:ProductService,private _snackBar: MatSnackBar ) { }

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

  count(product) {
    if (this.amountCounter === product.amount) {
      this.openSnackBar(new Error("Max amount").message, "DONE")
    } else {

      this.amountCounter++;
    }
  }

  decrease() {
    if (this.amountCounter === 0) {
      this.openSnackBar(new Error("Amount can not be less than zero").message, "DONE")
    } else {

      this.amountCounter--;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }



}
