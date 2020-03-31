import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swiper, { SwiperOptions } from 'swiper';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productService:ProductService) { }

  listOfProducts: Array<any>;

  form = new FormGroup({
    name: new FormControl()
  });

  ngOnInit(): void {
    this.listOfProducts = this.productService.getProduct();  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
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

}
