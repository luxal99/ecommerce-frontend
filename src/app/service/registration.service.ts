import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http: HttpClient) { }

  registerClient(user) {
    return this.http.post('/register/client', user, { responseType: 'text' })
  }

  getUserType() {
    return this.http.get('api/registration/getUserType', { responseType: 'json' })
  }


}
