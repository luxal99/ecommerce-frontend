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
}
