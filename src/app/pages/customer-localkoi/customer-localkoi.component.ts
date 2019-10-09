import { Component, OnInit } from '@angular/core';
import { LocalKoiDetailsService } from 'app/services/local-koi-details.service';

@Component({
  selector: 'app-customer-localkoi',
  templateUrl: './customer-localkoi.component.html',
  styleUrls: ['./customer-localkoi.component.scss']
})
export class CustomerLocalkoiComponent implements OnInit {
  
  fish_details:any;
  all_details:any;
  
  constructor(private local_koi_details:LocalKoiDetailsService) { }

  ngOnInit() {

    this.loadAll()

  }

  loadAll(){
    this.fish_details=this.local_koi_details.loadAll();
    //console.log(this.fish_details)
  }

}
