import { Component, OnInit } from '@angular/core';
import { FishDetailsService } from "../../services/fish_details.service";
import { SyncRequestClient } from 'ts-sync-request/dist'
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
 
    constructor(private fish_details_service:FishDetailsService){}

    ngOnInit(){
         this.item_details=this.fish_details_service.getItemData();
         this.form=new FormGroup({
            name:new FormControl('',Validators.required),
            category:new FormControl('',Validators.required),
            age:new FormControl('',Validators.required),
            size:new FormControl('',Validators.required),
            price:new FormControl('',Validators.required),
            code:new FormControl('',Validators.required),
          })
      
    }

    deleteItem(id: number){
        console.log(id+"id")
        this.item_details=this.fish_details_service.getItemData();
        // this.item_details_service.deleteItemData(id).subscribe((error)=>{
        //     this.item_details=this.item_details_service.getItemData();
        //     console.log(error)
        // })
    }
}
