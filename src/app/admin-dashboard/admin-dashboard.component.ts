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

  listOfProduct:Array<any> = [];
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'picture' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (picture: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:",  response);
      localStorage.setItem('image',response);
    };
  }

  productForm = new FormGroup({
    picture: new FormControl("")
  })

  upload() {
    var image = this.productForm.get('picture').value;

    console.log(image);

    this.productService.uploadPicture(image).subscribe(data => {
      console.log(data);

    })

  }

    openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: 'auto',
     backdropClass:'addProduct'
    });

  }

  productColumns: string[] = ['code', 'title', 'amount', 'price'];

}
