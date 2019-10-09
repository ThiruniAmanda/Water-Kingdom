import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { comparePassword } from 'app/shared/confirm-equal-validator.directive';
import { UserProfileService } from 'app/services/user-profile.service';
import { Router } from '@angular/router';
declare function  disable_search_bar():any;

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit,ErrorHandler{

    form:any;
    error_message:any=false;
    profile_data:any;
    constructor(private profile_image:UserProfileService,private router:Router){}

    ngOnInit(){

        //console.log(localStorage.getItem('loggedIn'))
        if(!localStorage.getItem('loggedIn')){
          this.router.navigate(['home']);
        }
        this.form=new FormGroup({
            user_names:new FormControl('',Validators.required),
            emails:new FormControl('',[Validators.required,Validators.email]),
            last_names:new FormControl('',Validators.required),
            first_names:new FormControl('',Validators.required),
            address1:new FormControl('',Validators.required),
          
          });

          disable_search_bar();
        
        this.profile_image.loadUserProfileData().subscribe((data)=>{
            this.profile_data=data;
            //console.log(data);
            //console.log(this.profile_data.img_path)
        });
    }

    handleError(error){
       //console.error('An error occurred:', error.message);  
      
    }
}

