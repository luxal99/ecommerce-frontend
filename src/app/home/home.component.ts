import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swiper, { SwiperOptions } from 'swiper';
import { ProductService } from '../service/product.service';
import { MatDialog } from '@angular/material';
import { RegistrationDialogComponent } from 'src/app/home/registration-dialog/registration-dialog.component'
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productService: ProductService, public dialog: MatDialog) { }

  listOfProducts: any = [];

  form = new FormGroup({
    name: new FormControl()
  });

  ngOnInit(): void {
this.getAllProducts();
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  findProductById(idProduct) {
    this.listOfProducts.forEach(product => {
      if (product.id === idProduct) {
        console.log(product);

        return product;
      }
    });
  }

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationDialogComponent, {
      width: 'auto',
      backdropClass: 'registrationDialog'
    });

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: 'auto',
      backdropClass: 'registrationDialog'
    });

  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.listOfProducts = data;
    })
  }



}


