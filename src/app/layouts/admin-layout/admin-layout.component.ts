import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  isSignedIn:boolean=false;
  ngOnInit() {
    
     console.log(localStorage.getItem('loggedIn'));
    if(localStorage.getItem('loggedIn')=='true')  this.isSignedIn=true;

   }
}
