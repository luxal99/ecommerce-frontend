import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(public http: HttpClient, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('idCompany')) { // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }


  login(user) {
    return this.http.post("api/login", user, { responseType: 'json' });

  }

  getCompanyById(idCompany) {
    return this.http.get("api/admin/findCompany/" + idCompany, { responseType: 'json' })
  }
}
