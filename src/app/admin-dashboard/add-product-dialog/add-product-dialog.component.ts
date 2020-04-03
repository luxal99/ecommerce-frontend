import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/classes/Company';
import { Product } from '../../classes/Product'
import { error } from 'protractor';
import { async } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';


const URL = 'api/admin/upload';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  constructor(public productService: ProductService, private _snackBar: MatSnackBar) { }

  image;

  ngOnInit(): void {

  }

  productForm = new FormGroup({
    title: new FormControl("", Validators.required),
    text: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
    picture:new FormControl("",Validators.required)
  })


  uploadImage() {
    const picture = new FormData();

    picture.append('picture', this.image);
    this.productService.uploadPicture(picture).subscribe(data => {
      console.log(data);

    })
  }

  onFileSelect(event) {
    console.log(event);

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  async saveProduct() {


    var code = this.productForm.get('code').value;
    var title = this.productForm.get('title').value;
    var text = this.productForm.get('text').value;
    var price = this.productForm.get('price').value;
    var amount = this.productForm.get('amount').value;
    var text = this.productForm.get('text').value;
    var picture = 'assets/img/' + this.image.name;
    var idCompany = new Company(localStorage.getItem("idCompany"));

    var product = new Product(code, title, price, amount, text, picture, idCompany);

    const image = new FormData();

    image.append('image', this.image);


    await this.productService.saveProduct(product).subscribe(data => {
      console.log(data);

      if (data != null) {

        this.productService.uploadPicture(image).subscribe(data => {

        })
      } else {
        this.openSnackBar("Can not save", "DONE")
      }
    })


  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }




}
