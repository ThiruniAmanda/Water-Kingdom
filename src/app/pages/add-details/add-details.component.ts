import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { Router } from '@angular/router';
declare function  disable_search_bar():any;
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  form:FormGroup;
  
  constructor(private login_validation:LoginValidationsService,private router:Router) { }

  ngOnInit() {
    
    console.log(localStorage.getItem('loggedIn'))
    if(!localStorage.getItem('loggedIn')){
      this.router.navigate(['home']);
    }

    disable_search_bar();
    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      // category:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      size:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required),
    })

  }

}
