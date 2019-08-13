import { Component, OnInit, Input } from '@angular/core';
import { FishDetailsService } from "../../services/fish_details.service";
import { SyncRequestClient } from 'ts-sync-request/dist'
import { FormGroup, FormControl, Validators} from '@angular/forms';
declare function  enable_search_bar():any;
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

    @Input() filter:any;
    
    item_details:any;
    image:any;
    form: any;
    input_value:string=null;
 
    constructor(private fish_details_service:FishDetailsService){}

    ngOnInit(){
         this.item_details=this.fish_details_service.getItemData();
         this.form=new FormGroup({
            name:new FormControl('',Validators.required),
            category:new FormControl('',Validators.required),
            age:new FormControl('',Validators.required),
            size:new FormControl('',Validators.required),
            price:new FormControl('',[Validators.required]),
            code:new FormControl('',Validators.required),
          });
          enable_search_bar();
    }

    deleteItem(id: number){
        console.log(id+"id")
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

    callValidations(){
        alert('hello')
        this.form=new FormGroup({
            name:new FormControl('',Validators.required),
            category:new FormControl('',Validators.required),
            age:new FormControl('',Validators.required),
            size:new FormControl('',Validators.required),
            price:new FormControl('',[Validators.required]),
            code:new FormControl('',Validators.required),
          })
    }
}
