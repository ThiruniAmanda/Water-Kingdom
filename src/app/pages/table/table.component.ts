import { Component, OnInit, Input } from '@angular/core';
import { FishDetailsService } from "../../services/fish_details.service";
import { SyncRequestClient } from 'ts-sync-request/dist'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { checkEmpty } from 'app/shared/checkEmpty';
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
    htmlCode;any;
    constructor(private fish_details_service:FishDetailsService){}

    ngOnInit(){

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
 
}
