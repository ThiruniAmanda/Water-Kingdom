import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  form:FormGroup;
  
  constructor() { }

  ngOnInit() {

    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      size:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required),
    })

  }

}
