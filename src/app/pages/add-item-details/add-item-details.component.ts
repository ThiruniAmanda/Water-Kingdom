import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function  disable_search_bar():any;
@Component({
  selector: 'app-add-item-details',
  templateUrl: './add-item-details.component.html',
  styleUrls: ['./add-item-details.component.scss']
})
export class AddItemDetailsComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit() {
    disable_search_bar()
    this.form=new FormGroup({
      item_name:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required),
    })
  }

}
