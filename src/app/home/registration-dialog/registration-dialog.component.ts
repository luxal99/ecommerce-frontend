import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {


  isClient = false;

  hideUser(){
   
  }
  userTypeForm = new FormGroup({
    userTypeControl: new FormControl("",Validators.required)
  })

  userAddressForm = new FormGroup({
    city:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required)


  })

  
  constructor() { }

  ngOnInit(): void {
  }

  listOfUserType: Array<any> = [
    { idUserType: 1, title: 'Company' },
    { idUserType: 2, title: 'Client' }
  ];

}
