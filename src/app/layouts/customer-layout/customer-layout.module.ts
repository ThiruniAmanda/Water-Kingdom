import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerHomeComponent } from 'app/pages/customer-home/customer-home.component';
import { RouterModule } from '@angular/router';
import { CustomerLayoutRoutes } from './customer-layout.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailsService } from 'app/services/item_details.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
   CustomerHomeComponent
  ],
  providers: [ItemDetailsService],
})
export class CustomerLayoutModule { }
