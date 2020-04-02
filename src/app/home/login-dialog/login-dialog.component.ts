import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  loginForm = new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  });

  ngOnInit() {
  }

  login(){
    var username = this.loginForm.get('username').value;
    var password = this.loginForm.get('password').value;

    var user = new User(username,password);

    this.loginService.login(user).subscribe(data=>{
      console.log(data);
      
    })

  }
  

}
