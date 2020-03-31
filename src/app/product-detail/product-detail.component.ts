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


  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {

    console.log;
    
    this.route.params.subscribe(params=>{

      console.log(this.productService.findProductById(params.id));
      
      
    })
    
  }

}
