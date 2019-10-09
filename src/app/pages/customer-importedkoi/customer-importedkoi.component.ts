import { Component, OnInit } from '@angular/core';
import { ImportedKoiDetailsService } from 'app/services/imported-koi-details.service';

@Component({
  selector: 'app-customer-importedkoi',
  templateUrl: './customer-importedkoi.component.html',
  styleUrls: ['./customer-importedkoi.component.scss']
})
export class CustomerImportedkoiComponent implements OnInit {

  fish_details:any;
  all_details:any;
  
  constructor(private imported_koi_details:ImportedKoiDetailsService) { }

  ngOnInit() {

    this.loadAll()

  }

  loadAll(){
    this.fish_details=this.imported_koi_details.loadAll();
    //console.log(this.fish_details)
  }

}
