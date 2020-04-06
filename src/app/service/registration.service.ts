import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http: HttpClient) { }

  registerClient(user) {
    return this.http.post('api/registration/client', user, { responseType: 'text' })
  }

  // Servis za registraciju kopanije
  registerCompany(user){
    return this.http.post('api/registration/company', user, { responseType: 'text' })
  }

  // Servis za registraciju klijenta
  getUserType() {
    return this.http.get('api/registration/getUserType', { responseType: 'json' })
  }




}
