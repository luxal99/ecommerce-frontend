import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import { from } from 'rxjs';
import { UserModel, User } from '../../classes/User'
import { Client } from 'src/app/classes/Client';
import { UserAddress } from 'src/app/classes/UserAddress';
import { UserType } from 'src/app/classes/UserType';
@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {

  listOfUserType: any = [];
  isClient = false;

  hideUser() {
    var userType = this.userTypeForm.get('idUserType').value;
    if (userType.idUserType === 1) {
      this.clientForm.disable();
    }


  }
  userTypeForm = new FormGroup({
    idUserType: new FormControl("", Validators.required)
  })

  userAddressForm = new FormGroup({
    city: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)


  })

  clientForm = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    telephone: new FormControl("", Validators.required),
  })

  accountForm = new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })


  constructor(public registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.getUserType();
  }

  getUserType() {
    this.registrationService.getUserType().subscribe(data => {
      console.log(data);

      this.listOfUserType = data;
    })
  }

  registerUser() {

    var client = new Client();
    var userAddress = new UserAddress();
    var userType = new UserType();
    var user = new User();

    client.name = this.clientForm.get('name').value;
    client.lastname = this.clientForm.get('lastname').value;
    client.telephone = this.clientForm.get('telephone').value;
    client.email = this.clientForm.get('email').value;

    userAddress.city = this.userAddressForm.get('city').value;
    userAddress.address = this.userAddressForm.get('address').value;

    user.username = this.accountForm.get('username').value;
    user.password = this.accountForm.get('password').value;
    user.idUserType = this.userTypeForm.get('idUserType').value;

    var userModel = [
      {userAddress:userAddress},
      {client:client},
      {user:user}
    ]

    this.registrationService.registerClient(userModel).subscribe(data=>{
      console.log(data);
      
    })

    console.log(userModel);
    

  }








}
