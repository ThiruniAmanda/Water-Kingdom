import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { comparePassword } from 'app/shared/confirm-equal-validator.directive';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{

    form:FormGroup;
    form2:FormGroup;

    ngOnInit(){
        this.form=new FormGroup({
            user_name:new FormControl('',Validators.required),
            email:new FormControl('',[Validators.required,Validators.email]),
            last_name:new FormControl('',Validators.required),
            first_name:new FormControl('',Validators.required),
            address:new FormControl('',Validators.required),
            // password:new FormControl('',[Validators.required,Validators.minLength(6)]),
          });

        this.form2=new FormGroup({
            old_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
            new_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
            reEnter_password:new FormControl('',[Validators.required,comparePassword('new_password')])
        })
    }
}
