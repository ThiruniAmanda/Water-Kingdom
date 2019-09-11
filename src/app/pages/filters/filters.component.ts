import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('a').click(function() {
      $('#myModal img').attr('src', $(this).attr('data-img-url')); 
  });
  }

}
