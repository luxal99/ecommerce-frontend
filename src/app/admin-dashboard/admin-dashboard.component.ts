import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { FileUploader } from 'ng2-file-upload';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { MatDialog } from '@angular/material';


const URL = 'api/admin/upload';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public productService: ProductService,public dialog: MatDialog) { }

  listOfProduct:any = [];
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
     backdropClass:'addProduct'
    });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.listOfProduct = data;
      console.log(this.listOfProduct[0].code);
      
    })
  }
  
  productColumns: string[] = ['code', 'title', 'amount', 'price'];

}
