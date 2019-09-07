import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { Router } from '@angular/router';
import randomString from 'randomstring';
declare function  disable_search_bar():any;
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  form:FormGroup;
  fish_code:string='LK_9C9';
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
      code:new FormControl({value:this.fish_code,disabled:true},Validators.required),
    });
  }

  generateCode(category:string){

    if(category=='local-koi'){
      const code=randomString.generate({
        charset:'hex',
        capitalization:'uppercase',
        length:3
      });
      return 'LK_'+code;
    }

    else if(category=='imported-koi'){
      const code=randomString.generate({
        charset:'hex',
        capitalization:'uppercase',
        length:3
      });
      return 'IM_'+code
    }

  }

  addCode(){
      let category=(<HTMLInputElement>document.getElementById('category')).value;
      let code=this.generateCode(category);
      // (<HTMLInputElement>document.getElementById('code')).value=code;
      this.fish_code=code;
      return code;
    }

}
