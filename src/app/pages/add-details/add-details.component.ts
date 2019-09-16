import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { Router } from '@angular/router';
import randomString from 'randomstring';
import { FishDetailsService } from 'app/services/fish_details.service';
declare function  disable_search_bar():any;
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  form:FormGroup;
  fish_code:string='LK_9C9';
  fish_count:any;
  code:string;
  constructor(private login_validation:LoginValidationsService,private _get_fish_count:FishDetailsService,private router:Router) { }

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
      code:new FormControl({value:this.addCode(),disabled:true},Validators.required),
    });
  }

  generateCode(category:string){

    if(category=='local-koi'){
      this.fish_count=this._get_fish_count.getLocalKoiFishCount()
        console.log(this.fish_count)
        
        if(this.fish_count.count>=0 && this.fish_count.count<10){
          this.code='LK_000'+(this.fish_count.count+1);
        }
        else if(this.fish_count.count>=10 && this.fish_count.count<100){
          this.code='LK_00'+(this.fish_count.count+1);
        }
        else if(this.fish_count.count>=100 && this.fish_count.count<1000){
          this.code='LK_0'+(this.fish_count.count+1);
        }
        else if(this.fish_count.count>=1000 && this.fish_count.count<10000){
          this.code='LK_'+(this.fish_count.count+1);
        }
        console.log(this.fish_count.count+':count');

      // const code=randomString.generate({
      //   charset:'hex',
      //   capitalization:'uppercase',
      //   length:3
      // });
      // return 'LK_'+code;
    }

    else if(category=='imported-koi'){

      this.fish_count=this._get_fish_count.getImportedKoiFishCount();
        console.log(this.fish_count)
        if(this.fish_count.count>=0 && this.fish_count.count<10){
          this.code='IM_000'+(this.fish_count.count+1)
        }
        else if(this.fish_count.count>=10 && this.fish_count.count<100){
          this.code='IM_00'+(this.fish_count.count+1)
        }
        else if(this.fish_count.count>=100 && this.fish_count.count<1000){
          this.code='IM_0'+(this.fish_count.count+1)
        }
        else if(this.fish_count.count>=1000 && this.fish_count.count<10000){
          this.code='IM_'+(this.fish_count.count+1)
        }
        console.log(this.fish_count.count);

    

      // const code=randomString.generate({
      //   charset:'hex',
      //   capitalization:'uppercase',
      //   length:3
      // });
      // return 'IM_'+code
    }

    return this.code;

  }

  addCode(){
      let category=(<HTMLInputElement>document.getElementById('category')).value;
      let code=this.generateCode(category);
      // (<HTMLInputElement>document.getElementById('code')).value=code;
      console.log(code);
      this.fish_code=code;
      return code;
    }

}
