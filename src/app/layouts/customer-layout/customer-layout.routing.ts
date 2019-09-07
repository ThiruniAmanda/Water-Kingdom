import { Routes } from '@angular/router';
import { CustomerHomeComponent } from 'app/pages/customer-home/customer-home.component';
import { CustomerImportedkoiComponent } from 'app/pages/customer-importedkoi/customer-importedkoi.component';
import { CustomerAboutusComponent } from 'app/pages/customer-aboutus/customer-aboutus.component';
import { CustomerContactComponent } from 'app/pages/customer-contact/customer-contact.component';
import { FoodComponent } from 'app/pages/food/food.component';
import { FiltersComponent } from 'app/pages/filters/filters.component';
import { MedicineComponent } from 'app/pages/medicine/medicine.component';
import { CustomerLocalkoiComponent } from 'app/pages/customer-localkoi/customer-localkoi.component';

import { CustomerLocalKoiViewComponent } from 'app/pages/customer-local-koi-view/customer-local-koi-view.component';

import { FishdetailsComponent } from 'app/pages/fishdetails/fishdetails.component';
import { LoginComponent } from 'app/pages/login/login.component';


export const CustomerLayoutRoutes: Routes = [
    { path: 'home', component: CustomerHomeComponent },
    { path: 'importedkoi', component: CustomerImportedkoiComponent },
    { path: 'aboutus', component: CustomerAboutusComponent },
    { path: 'contact', component: CustomerContactComponent },
    { path: 'food', component: FoodComponent },
    { path: 'filters', component: FiltersComponent },
    { path: 'medicine', component: MedicineComponent },
    { path: 'localkoi', component: CustomerLocalkoiComponent },
    { path:'localkoi-view/:code', component:CustomerLocalKoiViewComponent},
    { path: 'view_details/:code', component: FishdetailsComponent },
    { path: 'localkoi', component: CustomerLocalkoiComponent },
    { path:'login'  ,component:LoginComponent}
];
