import { Component, OnInit } from '@angular/core';
import { LocalKoiDetailsService } from 'app/services/local-koi-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fishdetails',
  templateUrl: './fishdetails.component.html',
  styleUrls: ['./fishdetails.component.scss']
})
export class FishdetailsComponent implements OnInit {
  sub: any;
  code: any;
  fish_details:any;
  description:any;
  youtube_link:any;
  video:any;
  constructor(private local_koi_details:LocalKoiDetailsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
    .params
    .subscribe(params =>{
      console.log(params['code'])
      this.code=params['code']
    });

  this.loadFishDetails(this.code);

  }

  loadFishDetails(code:string){
    this.fish_details=this.local_koi_details.getFishData(code);
    console.log(this.fish_details[0].description);
    this.description=this.fish_details[0].description;
    this.youtube_link=this.fish_details[0].link;
    this.video=this.fish_details[0].video_path;
    console.log(this.youtube_link);
  }

}
