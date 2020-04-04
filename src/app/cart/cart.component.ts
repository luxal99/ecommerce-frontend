import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Product, ProductOrder } from '../classes/Product';
import { LoginDialogComponent } from '../home/login-dialog/login-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any = [];
  total = 0;

  amountForm = new FormGroup({
    orderAmount: new FormControl(1)
  })

  constructor(public productService: ProductService, private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.getCart();
    this.getTotal();
  }

  getCart() {
    this.cartList = [];
    this.cartList = this.productService.getCart();
  }

  getTotal() {
    this.total = this.productService.sum();
  }

  count(product) {
    console.log(product);
    
    if (product.orderAmount === product.amount) {
      this.openSnackBar(new Error("Max amount").message, "DONE")
    } else {
     product.orderAmount++;
      this.getTotal();
    }
  }

   decrease(product) {
     if (product.orderAmount === 1) {
       this.openSnackBar(new Error("Amount can not be less than one").message, "DONE")
     } else {
        product.orderAmount--;
     }
   }

  deleteProduct(product) {
    this.productService.deleteProduct(product);
    this.getCart();
    this.getTotal();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: 'auto',
      backdropClass: 'registrationDialog'
    });

  }

  purchase(){

    if (localStorage.getItem("idClient")!=null) {
      
    }else{
      this.openLoginDialog();
    }
  }



}
