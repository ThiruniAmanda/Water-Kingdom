import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { CustomerNavbarComponent } from './shared/customer-navbar/customer-navbar.component';
import { CustomerOurkoiComponent } from './pages/customer-ourkoi/customer-ourkoi.component';
import { CustomerAboutusComponent } from './pages/customer-aboutus/customer-aboutus.component';
import { CustomerContactComponent } from './pages/customer-contact/customer-contact.component';
import { CustomerNavbarModule } from './shared/customer-navbar/customer-navbar.module';
import { FoodComponent } from './pages/food/food.component';
import { FiltersComponent } from './pages/filters/filters.component';
import { MedicineComponent } from './pages/medicine/medicine.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    CustomerNavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
