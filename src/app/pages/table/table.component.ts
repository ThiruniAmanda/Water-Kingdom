import { Component, OnInit } from '@angular/core';
import {ItemDetailsService} from '../../services/item_details.service'

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    item_details:any;

 
    constructor(private item_details_service:ItemDetailsService){}

    ngOnInit(){
     
        this.item_details_service.getItemData().subscribe((items)=>{
            this.item_details=items;
            console.log(items)
        });

    }

    deleteItem(id: number){
        console.log(id+"id")
        this.item_details_service.deleteItemData(id).subscribe((error)=>{
            console.log(error)
        })
    }
}
