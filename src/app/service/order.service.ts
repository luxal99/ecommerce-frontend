import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  pushOrder(order) {
    return this.http.post("api/client/saveOrder", order, { responseType: 'text' });
  }

  getOrderByCompanyId(idCompany){
    return this.http.get("api/getOrdersById/"+idCompany,{responseType:'json'});
  }

  getAnalytics(){
    return this.http.get("api/admin/getAnalytics",{responseType:'json'});
  }
}
