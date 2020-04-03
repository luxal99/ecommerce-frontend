import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/classes/Company';
import { Product } from '../../classes/Product'


const URL = 'api/admin/upload';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  constructor(public productService: ProductService) { }

  image;

  ngOnInit(): void {

  }

  productForm = new FormGroup({
    title: new FormControl("", Validators.required),
    text: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
  })

  uploadForm = new FormGroup({
    picture: new FormControl()
  })


  uploadImage() {
    const picture = new FormData();

    picture.append('picture', this.uploadForm.get('picture').value);
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

  saveProduct() {

    console.log(this.productForm.get('text').value);

    var product = {
      "code": this.productForm.get('code').value,
      "title": this.productForm.get('title').value,
      "text": this.productForm.get('text').value,
      "amount": this.productForm.get('amount').value,
      "price": this.productForm.get('price').value,
      "picture": 'assets/img' + this.image.name,
      "idCompany": { "idCompany": localStorage.getItem("idCompany") }
    }

    const picture = new FormData();

     picture.append('picture', this.image);
     this.productService.uploadPicture(picture).subscribe(data => {


     })

    this.productService.saveProduct(product).subscribe(data => {
      console.log(data);

    })
  }


}
