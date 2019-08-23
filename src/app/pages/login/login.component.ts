import { Component, OnInit } from '@angular/core';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success:any;
  error_login:boolean=false;
  constructor(private login_validations:LoginValidationsService,private _router:Router) { }

  ngOnInit() {

  }

  isAdmin(){
    let email=(<HTMLInputElement>document.getElementById('email')).value;
    let password=(<HTMLInputElement>document.getElementById('password')).value;
    console.log(email)
    this.login_validations.checkCredentials(email,password).subscribe((response)=>{
      console.log(response)
      this.success=response;
      if(this.success.success){
        this._router.navigate(['dashboard']);
      }

      else{
        this.error_login=true;
        (<HTMLInputElement>document.getElementById('password')).value=null;
      }

    })
  }

}
