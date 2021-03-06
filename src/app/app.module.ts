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
import { CustomerNavbarModule } from './shared/customer-navbar/customer-navbar.module';
import {CustomerFooterModule} from './shared/customer-footer/customer-footer.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CustomerFooterComponent } from './shared/customer-footer/customer-footer.component';
import { CustomerLocalKoiViewComponent } from './pages/customer-local-koi-view/customer-local-koi-view.component'
import { CustomerNavbarComponent } from './shared/customer-navbar/customer-navbar.component';
import { DeletedFishDetailsComponent } from './pages/deleted-fish-details/deleted-fish-details.component';
import{TestingComponent} from './testing/testing.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { AddItemDetailsComponent } from './pages/add-item-details/add-item-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    PageNotFoundComponent,
    TestingComponent,
    ConfirmEqualValidatorDirective,
    IconsComponent,
    MapsComponent,
    AddItemDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle:3600, timeout: 300, ping: 120}),
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    CustomerNavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
