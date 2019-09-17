import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishDetailsService } from 'app/services/fish_details.service';
declare function  enable_search_bar():any;
@Component({
  selector: 'app-deleted-fish-details',
  templateUrl: './deleted-fish-details.component.html',
  styleUrls: ['./deleted-fish-details.component.scss']
})
export class DeletedFishDetailsComponent implements OnInit {

  item_details:any;
  constructor(private fish_details_service:FishDetailsService,private router:Router) { }

  ngOnInit() {
    enable_search_bar();
    this.item_details=this.fish_details_service.getDeletedData();
  }

}
