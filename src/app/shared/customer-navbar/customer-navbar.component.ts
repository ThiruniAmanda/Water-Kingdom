import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'app/pages/login/login.component';
import { LoginValidationsService } from 'app/services/login-validations.service';

@Component({
  selector: 'customer-nav',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss']
})
export class CustomerNavbarComponent implements OnInit {
  
  isLoggedIn:boolean=false
  constructor(private login_validation:LoginValidationsService) { }

  ngOnInit() {
    if(localStorage.getItem('loggedIn')=='true') this.isLoggedIn=true;
  }

  destroy_token(){
    this.login_validation.logOut();
  }

}
