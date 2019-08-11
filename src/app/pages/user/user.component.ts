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
    socket: any;
    error_message:any=false;

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
        });

        // this.socket=socketIo("http://localhost:4600");
        // this.socket.on('validate_admin',(error)=>{
        //     this.error_message=error;
        // })


        // this.socket=socketIo('http://localhost:4600/validate_admin',{path:'/validate_admin',reconnect:true,forceNew:true});
        // this.socket.on('error_validate',data=>{
        //   console.log("connected1");
        //   this.error_message=data;
        //   console.log(this.error_message);
        
        // });

        // this.socket.on('redirect',data=>{
        //     console.log(data)
        // })
    }
}
