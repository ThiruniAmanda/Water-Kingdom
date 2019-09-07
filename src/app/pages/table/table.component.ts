import { Component, OnInit, Input } from '@angular/core';
import { FishDetailsService } from "../../services/fish_details.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { checkEmpty } from 'app/shared/checkEmpty';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
declare function  enable_search_bar():any;
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{
    
    item_details:any;
    image:any;
    form: any;
    input_value:string=null;
    code:string;
    constructor(private fish_details_service:FishDetailsService,private router:Router){}

    ngOnInit(){

        console.log(localStorage.getItem('loggedIn'))
        if(!localStorage.getItem('loggedIn')){
          this.router.navigate(['home']);
        }

         this.item_details=this.fish_details_service.getItemData();
         console.log(this.item_details)
          enable_search_bar();
    }

    deleteItem(id:string){
        console.log(id+"id");
        // alert(id)
        this.fish_details_service.deleteItemData(id).subscribe((error)=>{

            this.item_details=this.fish_details_service.getItemData();
            console.log(error)
        })
    }


    display(){
    //   alert((<HTMLInputElement>document.getElementById('fish_id')).value)
      var fish_id=(<HTMLInputElement>document.getElementById('fish_id')).value;
      this.fish_details_service.filterData(fish_id).subscribe((data)=>{
          this.item_details=data
          this.input_value=null;
          enable_search_bar();
          console.log(this.item_details)
      });

    }

    mark_availability(code:string){
        this.fish_details_service.mark_availability_sold(code).subscribe(()=>{
            console.log('Done')
            this.item_details=this.fish_details_service.getItemData();
            console.log(this.item_details)
        })
    }
 
}
