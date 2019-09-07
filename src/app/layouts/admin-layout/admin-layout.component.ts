import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { LoginValidationsService } from 'app/services/login-validations.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  isSignedIn:boolean=false;
  constructor(private userIdle:UserIdleService,private login_validations:LoginValidationsService,private router:Router){}

  ngOnInit() {
    
    console.log(localStorage.getItem('loggedIn'));

    if(localStorage.getItem('loggedIn')=='true')  this.isSignedIn=true;
    
    this.userIdle.startWatching();
    
    this.userIdle.onTimerStart().subscribe(count =>{
      console.log(count);
      var eventList= ['click', 'mouseover','keydown','DOMMouseScroll','mousewheel','mousedown','touchstart','touchmove','scroll','keyup'];
        for(let event of eventList) {
        document.getElementById('wrapper_admin').addEventListener(event, () =>this.userIdle.resetTimer());
        }
    })
    

    this.userIdle.onTimeout().subscribe(() =>{
      this.login_validations.timeOut();
      alert('Your Session has been Expired')
      this.router.navigate(['login']);
      // localStorage.setItem('session','timeout');

    });

   }

  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    this.userIdle.resetTimer();
  }

}
