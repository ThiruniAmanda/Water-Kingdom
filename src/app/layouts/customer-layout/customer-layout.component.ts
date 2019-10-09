import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  location: Location;
  isLoad: boolean=true;

  constructor(location:Location) {
    this.location = location;
   }

  ngOnInit() {

    this.getTitle();

  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    //console.log(titlee)

    if(titlee=='/login')
      this.isLoad=false
  }

}
