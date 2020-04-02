import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }



  login(user){
      return this.http.post("api/login",user,{responseType:'json'});

  }
}
