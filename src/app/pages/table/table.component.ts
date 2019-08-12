import { Component, OnInit } from '@angular/core';
import {ItemDetailsService} from '../../services/item_details.service'
import { SyncRequestClient } from 'ts-sync-request/dist'
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    
    item_details:any;
    image:any;
 
    constructor(private item_details_service:ItemDetailsService){}

    ngOnInit(){
        let url = "http://localhost:4600/fetch_items";
        // this.item_details_service.getItemData().subscribe((items)=>{
        //     this.item_details=items;
        //     console.log(items)
        // });

        var response = new SyncRequestClient().addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4").get<Response>(url);
        console.log(response)
        this.item_details=response;
      
    }

    deleteItem(id: number){
        console.log(id+"id")
        this.item_details_service.deleteItemData(id).subscribe((error)=>{
            this.item_details_service.getItemData().subscribe((items)=>{
                this.item_details=items;
                console.log(items)
            });
            console.log(error)
        })
    }
}
