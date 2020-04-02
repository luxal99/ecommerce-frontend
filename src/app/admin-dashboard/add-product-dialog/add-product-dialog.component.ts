import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormControl } from '@angular/forms';


const URL = 'api/admin/upload';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  constructor(public productService:ProductService) { }

  productForm = new FormGroup({
    picture: new FormControl("")
  })
  
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

  uploadImage(){
    const picture = new FormData();

    picture.append('picture',this.productForm.get('picture').value);
    this.productService.uploadPicture(picture).subscribe(data=>{
      console.log(data);
      
    })
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.get('picture').setValue(file);
    }
  }





}
