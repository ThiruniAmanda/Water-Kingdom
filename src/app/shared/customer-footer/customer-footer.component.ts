import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-footer',
  templateUrl: './customer-footer.component.html',
  styleUrls: ['./customer-footer.component.scss']
})
export class CustomerFooterComponent implements OnInit {
  test:Date = new Date();
  constructor() { }

  ngOnInit() {

  }

}
