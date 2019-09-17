import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    $('a').click(function() {
      $('#myModal img').attr('src', $(this).attr('data-img-url')); 
  });

  }

}
