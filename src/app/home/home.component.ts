import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swiper, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listOfProducts: Array<any> = [
    { id: 1, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 2, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 3, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 4, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 5, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 6, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 7, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' },
    { id: 8, title: 'Product 1', price: '99$', img: 'assets/img/6910486_preview.png' }
  ]

  form = new FormGroup({
    name: new FormControl()
  });

  ngOnInit(): void {
  }

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
