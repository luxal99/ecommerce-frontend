import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Product, ProductOrder } from '../classes/Product';
import { LoginDialogComponent } from '../home/login-dialog/login-dialog.component';
import { LoginService } from '../service/login.service';
import { Order } from "../classes/Order";
import { OrderService } from "../service/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any = [];
  total = 0;

  client;
  clientName;
  clientLastname;
  clientCity;
  clientAddress;
  clientTelephone;
  clientMail;


  amountForm = new FormGroup({
    orderAmount: new FormControl(1)
  })

  constructor(public productService: ProductService,
     public loginService: LoginService, private _snackBar: MatSnackBar, public dialog: MatDialog,public orderService:OrderService) { }

  ngOnInit() {
    this.getCart();
    this.getTotal();
    this.findClient();
  }

  findClient() {
    this.loginService.getClientById(localStorage.getItem("idClient")).subscribe(data => {

      this.client = data;

      this.clientName = data['name'];
      this.clientLastname = data['lastname'];
      this.clientMail = data['mail'];
      this.clientTelephone = data['telephone'];
      this.clientAddress = data['idUserAddress']['address'];
      this.clientCity = data['idUserAddress']['city'];

    })
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
    this.productService.deleteFromCart(product);
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

  purchase() {

    if (localStorage.getItem("idClient") != null) {

      var productList:Array<any>=[];

      this.cartList.forEach(element => {
        productList.push(element);
      });
      var order = {client:this.client,productList:productList,total:this.total};

      console.log(order);
      this.orderService.pushOrder(order).subscribe(data=>{
        this.openSnackBar("Successfully","DONE");
        
      })
      

    } else {
      this.openLoginDialog();
    }
  }



}
