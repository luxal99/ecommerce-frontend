import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { FileUploader } from 'ng2-file-upload';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { MatDialog } from '@angular/material';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';


const URL = 'api/admin/upload';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public productService: ProductService, public dialog: MatDialog) { }

  listOfProduct: any = [];
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'picture' });

  ngOnInit() {
    this.getAllProducts();
  }

  productForm = new FormGroup({
    picture: new FormControl("")
  })

  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

  openProductDetailDialog(product): void {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct',
      data:{product:product}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

  openEditProductDialog(product): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct',
      data:{product:product}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.listOfProduct = data;
    })
  }


  deleteProduct(idProduct) {
    this.productService.deleteProduct(idProduct).subscribe(data => {
      console.log(data);

      this.getAllProducts();

    })
  }

  productColumns: string[] = ['code', 'title', 'amount', 'price', 'option'];

}
