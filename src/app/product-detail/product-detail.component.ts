import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.findProduct();
  }

  findProduct(){
    this.route.params.subscribe(params=>{
     this.product = this.productService.findProductById(params.id);
    })
    
  }
}
