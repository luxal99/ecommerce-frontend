import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-order-diloag-overview',
  templateUrl: './order-diloag-overview.component.html',
  styleUrls: ['./order-diloag-overview.component.css']
})
export class OrderDiloagOverviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  client;
  listOfProduct:any=[];
  ngOnInit() {
    this.initTables();
  }

  initTables(){
    this.client = this.data.client;
    this.listOfProduct = this.data.product

    console.log(this.listOfProduct);
    
    
    
    
  }

  clientColumns: string[] = ['mail', 'telephone', 'city', 'address'];
  productColumns: string[] = ['code', 'title', 'orderAmount'];

}
