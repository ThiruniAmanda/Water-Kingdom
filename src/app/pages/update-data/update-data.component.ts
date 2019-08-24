import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FishDetailsService } from 'app/services/fish_details.service';
import { checkEmpty } from 'app/shared/checkEmpty';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
declare function  disable_search_bar():any;
@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  form: any;
  data:any;
  sub: any;
  code:any;
  isSelected:boolean;
  isSelectedCat:boolean;
  constructor(private fish_details_service:FishDetailsService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    console.log(localStorage.getItem('loggedIn'))
    if(!localStorage.getItem('loggedIn')){
      this.router.navigate(['home']);
    }

    this.sub = this.route
      .params
      .subscribe(params =>{
        console.log(params['code'])
        this.code=params['code']
      });

    this.data=this.fish_details_service.getUpdateData(this.code)
    console.log(this.data)

    if(this.data[0].category=='imported-koi'){
      this.isSelectedCat=true;
    }

    else if(this.data[0].category=='local-koi'){
      this.isSelectedCat=false
    }

    if(this.data[0].gender=='male'){
      this.isSelected=true;
    }

    else if(this.data[0].gender=='female'){
      this.isSelected=false;
    }


      this.form=new FormGroup({
      name:new FormControl(this.data[0].name,[checkEmpty()]),
      age:new FormControl(this.data[0].age,[checkEmpty()]),
      size:new FormControl(this.data[0].size,checkEmpty()),
      price:new FormControl(this.data[0].price,checkEmpty()),
      code:new FormControl(this.data[0].code,checkEmpty()),
    });

    this.callUpdates();
    disable_search_bar();
  }

  callUpdates(){
    this.form.controls.name.valueChanges.pipe(distinctUntilChanged()).subscribe(x=>{console.log(x);this.form.controls.name.updateValueAndValidity();});
    // this.form.controls.category.valueChanges.subscribe(x=>this.form.controls.category.updateValueAndValidity());
    this.form.controls.age.valueChanges.subscribe(x=>this.form.controls.age.updateValueAndValidity());
    this.form.controls.size.valueChanges.subscribe(x=>this.form.controls.size.updateValueAndValidity());
    this.form.controls.price.valueChanges.subscribe(x=>this.form.controls.price.updateValueAndValidity());
    this.form.controls.code.valueChanges.subscribe(x=>this.form.controls.code.updateValueAndValidity());
}

}
