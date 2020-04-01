import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  });

  ngOnInit() {
  }
  

}
