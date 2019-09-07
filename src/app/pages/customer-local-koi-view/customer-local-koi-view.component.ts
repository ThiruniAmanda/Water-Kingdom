import { Component, OnInit } from '@angular/core';
import { LocalKoiDetailsService } from 'app/services/local-koi-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-local-koi-view',
  templateUrl: './customer-local-koi-view.component.html',
  styleUrls: ['./customer-local-koi-view.component.scss']
})
export class CustomerLocalKoiViewComponent implements OnInit {
  fish_details: any;
  code:any;
  sub: any;
  constructor(private local_koi_details:LocalKoiDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params =>{
        console.log(params['code'])
        this.code=params['code']
      });

    this.loadFishDetails(this.code)
  }

  loadFishDetails(code:string){
    this.fish_details=this.local_koi_details.getFishData(code)
  }

}
