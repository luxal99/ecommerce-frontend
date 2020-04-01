import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../classes/Product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  amountCounter = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findProduct();
  }

  findProduct() {
    this.route.params.subscribe(params => {
      this.product = this.productService.findProductById(params.id);
    })

  }

  count() {
    if (this.amountCounter === this.product.amount) {
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
