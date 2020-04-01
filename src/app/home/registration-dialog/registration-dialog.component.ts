import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {


  isClient = false;

  hideUser() {
    var userType = this.userTypeForm.get('userTypeControl').value;
    console.log(userType);
    
    if (userType.idUserType === 1) {
      this.clientForm.disable();
    }


  }
  userTypeForm = new FormGroup({
    userTypeControl: new FormControl("", Validators.required)
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


  constructor() { }

  ngOnInit(): void {
  }

  listOfUserType: Array<any> = [
    { idUserType: 1, title: 'Company' },
    { idUserType: 2, title: 'Client' }
  ];

}
