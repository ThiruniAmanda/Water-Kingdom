import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerHomeComponent } from 'app/pages/customer-home/customer-home.component';
import { RouterModule } from '@angular/router';
import { CustomerLayoutRoutes } from './customer-layout.routing';
import { FormsModule } from '@angular/forms';
import { CustomerContactComponent } from 'app/pages/customer-contact/customer-contact.component';
import { CustomerAboutusComponent } from 'app/pages/customer-aboutus/customer-aboutus.component';
import { CustomerImportedkoiComponent } from 'app/pages/customer-importedkoi/customer-importedkoi.component';
import { FoodComponent } from 'app/pages/food/food.component';
import { FiltersComponent } from 'app/pages/filters/filters.component';
import { MedicineComponent } from 'app/pages/medicine/medicine.component';
import { CustomerLocalkoiComponent } from 'app/pages/customer-localkoi/customer-localkoi.component';
import { FishdetailsComponent } from 'app/pages/fishdetails/fishdetails.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomerLocalKoiViewComponent } from 'app/pages/customer-local-koi-view/customer-local-koi-view.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { SafePipe } from 'app/services/safe_url.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientModule
  ],
  declarations: [
   CustomerHomeComponent,
   CustomerContactComponent,
   CustomerAboutusComponent,
   CustomerImportedkoiComponent,
   FoodComponent,
   FiltersComponent,
   MedicineComponent,
   CustomerLocalkoiComponent,
   CustomerLocalKoiViewComponent,
   FishdetailsComponent,
   CustomerAboutusComponent,
   CustomerContactComponent,
   CustomerHomeComponent,
   LoginComponent,
   SafePipe
  ],
  providers: [],
})
export class CustomerLayoutModule { }
