import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('a').click(function() {
      $('#myModal img').attr('src', $(this).attr('data-img-url')); 
  });
  
  }

}
