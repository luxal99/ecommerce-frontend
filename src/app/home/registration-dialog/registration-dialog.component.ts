import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import { from } from 'rxjs';
import { UserModel, User } from '../../classes/User'
import { Client } from 'src/app/classes/Client';
import { UserAddress } from 'src/app/classes/UserAddress';
import { UserType } from 'src/app/classes/UserType';
import { MatSnackBar } from '@angular/material';
import { Company } from 'src/app/classes/Company';
@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {


  constructor(public registrationService: RegistrationService, private _snackBar: MatSnackBar) { }

  listOfUserType: any = [];
  isClient = false;

  // Funkcija koja odredjuje koje ce polja biti dostupna
  hideUser() {
    var userType = this.userTypeForm.get('idUserType').value;
    if (userType.idUserType === 1) {
      this.userAddressForm.get('company').enable();
      this.clientForm.disable();

    } else if (userType.idUserType === 2) {
      this.userAddressForm.get('company').disable();
    }


  }

  // Forma za izbor tipa naloga
  userTypeForm = new FormGroup({
    idUserType: new FormControl("", Validators.required)
  })

  /**
   * Forma za upis adrese -> takodje ako se izabran
   * tip naloga firme otvara se pristup polju za unos imena firme
   */
  userAddressForm = new FormGroup({
    city: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    company: new FormControl("")


  })
  // Forma za upis klijenata.Dostupna samo ako je izabran tip nalog klijent.
  clientForm = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    telephone: new FormControl("", Validators.required),
  })

  // Forma za unos pristupnih podataka.
  accountForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })


  ngOnInit(): void {
    this.getUserType();
  }

  // Servis koji vraca tipove naloga 
  getUserType() {
    this.registrationService.getUserType().subscribe(data => {
      console.log(data);

      this.listOfUserType = data;
    })
  }

  // Servis za registraciju
  registerUser() {

    try {

      // Kreiranje objekata za prosledjivanje
      var client = new Client();
      var userAddress = new UserAddress();
      var user = new User();
      var company = new Company();
      var idUserType = this.userTypeForm.get('idUserType').value;

      userAddress.city = this.userAddressForm.get('city').value;
      userAddress.address = this.userAddressForm.get('address').value;

      user.username = this.accountForm.get('username').value;
      user.password = this.accountForm.get('password').value;
      user.idUserType = this.userTypeForm.get('idUserType').value;
      user.idCompany = company;
      user.idClient = client;


      /**
       * U zavisnosti od izabranog tipa nalog pokrece se servis
       *    idUserType = 2 -> Servis za registraciju klijenta
       *    idUserType = 1 => Servis za registraciju kompanije
       */
      if (idUserType.idUserType === 2) {

        client.name = this.clientForm.get('name').value;
        client.lastname = this.clientForm.get('lastname').value;
        client.telephone = this.clientForm.get('telephone').value;
        client.mail = this.clientForm.get('mail').value;
        client.idUserAddress = userAddress;

        this.registrationService.registerClient(user).subscribe(data => {
          console.log(data['message']);

          this.openSnackBar(data, "Done")
        })



      } else if (idUserType.idUserType === 1) {
        company.idUserAddress = userAddress;
        company.title = this.userAddressForm.get('company').value;

        this.registrationService.registerCompany(user).subscribe(data => {
          console.log(data['message']);

          this.openSnackBar(data, "Done")
        })
      }
    } catch{
      this.openSnackBar("Check yours input field", "DONE")
    }


  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }






}
