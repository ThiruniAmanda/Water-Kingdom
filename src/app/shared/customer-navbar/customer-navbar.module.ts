import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CustomerNavbarComponent } from './customer-navbar.component';


@NgModule({
  declarations: [CustomerNavbarComponent],
  imports: [ RouterModule, CommonModule, NgbModule ],
  exports:[CustomerNavbarComponent]
})
export class CustomerNavbarModule { }
