import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { comparePassword } from 'app/shared/confirm-equal-validator.directive';
import { UserProfileService } from 'app/services/user-profile.service';
declare function  disable_search_bar():any;

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{

    form:FormGroup;
    form2:FormGroup;
    socket: any;
    error_message:any=false;
    profile_data:any;

    constructor(private profile_image:UserProfileService){}

    ngOnInit(){
        disable_search_bar();
        this.form=new FormGroup({
            user_name:new FormControl('',Validators.required),
            email:new FormControl('',[Validators.required,Validators.email]),
            last_name:new FormControl('',Validators.required),
            first_name:new FormControl('',Validators.required),
            address:new FormControl('',Validators.required),
            // password:new FormControl('',[Validators.required,Validators.minLength(6)]),
          });
        
        //   this.form2=new FormGroup({
        //     old_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
        //     new_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
        //     reEnter_password:new FormControl('',[Validators.required,comparePassword('new_password')])
        // });

        this.profile_image.loadProfilePic().subscribe((items)=>{
            this.profile_data=items;
            console.log(items)
        });

    }
}
