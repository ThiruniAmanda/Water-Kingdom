import { Component, OnInit } from '@angular/core';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { RemembermeService } from 'app/services/remember_me.service';
declare function redirect_to_dashboard():any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success:any;
  error_login:boolean=false;
  session_timeout:boolean=false;
  constructor(private login_validations:LoginValidationsService,private _router:Router,private remember_me_serivice:RemembermeService) { }

  ngOnInit() {

    if(localStorage.getItem('remember_me')){
      (<HTMLInputElement>document.getElementById('email')).value=localStorage.getItem('remember_me');
      (<HTMLInputElement>document.getElementById('remember_user')).checked=true;
    }

    if(localStorage.getItem('session')=='timeout'){
      this.session_timeout=true;
    }

    console.log(localStorage.getItem('remember_me'))
  }

  isAdmin(){
    let email=(<HTMLInputElement>document.getElementById('email')).value;
    let password=(<HTMLInputElement>document.getElementById('password')).value;
    let remeber_token=(<HTMLInputElement>document.getElementById('remember_user')).checked;

    if(remeber_token){
      this.remember_me_serivice.setRememberToken(email)
    }

    else{
      this.remember_me_serivice.removeRememberToken();
    }

    console.log(email)
    
    this.login_validations.checkCredentials(email,password).subscribe((response)=>{
      console.log(response)
      this.success=response;

      if(this.success.success){
        this.login_validations.logIn();
        redirect_to_dashboard();
       // this._router.navigateByUrl('/dashboard');
      }

      else{
        this.error_login=true;
        (<HTMLInputElement>document.getElementById('password')).value=null;
      }

    });
  }



}
