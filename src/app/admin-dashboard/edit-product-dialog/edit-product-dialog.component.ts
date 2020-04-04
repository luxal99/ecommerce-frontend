import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/classes/Company';
import { Product } from 'src/app/classes/Product';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public productService: ProductService, private _snackBar: MatSnackBar) { }

  image;
  isImageSelected = false;

  ngOnInit(): void {
    console.log(this.data);
    this.setFormValue()

  }

  productForm = new FormGroup({
    title: new FormControl("", Validators.required),
    text: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
    picture: new FormControl("")
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
    this.isImageSelected = true;

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
    var picture = '';
    var idCompany = new Company(localStorage.getItem("idCompany"));

    const image = new FormData();

    image.append('image', this.image);

    if (this.isImageSelected) {
      picture = 'assets/img/' + this.image.name;
    }else{
      picture = this.data.product.picture;
    }
    

    var product = new Product(code, title, price, amount, text, picture, idCompany);
    product.idProduct = this.data.product.idProduct;


    await this.productService.updateProduct(product).subscribe(data => {
      console.log(data);

      if (this.isImageSelected) {

        this.productService.uploadPicture(image).subscribe(data => {

        })
      } else {
      }
    })


  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setFormValue() {
    this.productForm.get('code').setValue(this.data.product.code);
    this.productForm.get('title').setValue(this.data.product.title);
    this.productForm.get('price').setValue(this.data.product.price);
    this.productForm.get('text').setValue(this.data.product.text)
    this.productForm.get('amount').setValue(this.data.product.amount);
  }




}
