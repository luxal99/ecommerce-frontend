import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/classes/User';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public loginService:LoginService,private _snackBar: MatSnackBar,public router:Router) { }

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
      if(data!=null){
        if (data['idClient'] !=null) {
          
        }else if (data['idCompany'] != null) {

          localStorage.setItem('idCompany',data['idCompany']['idCompany']);
          this.router.navigate(['/admin']);
        }

      }else{
        this.openSnackBar("User not found","DONE");
      }

    })

  }

   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  

}
