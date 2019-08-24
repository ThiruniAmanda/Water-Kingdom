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


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 60, timeout: 30, ping: 20}),
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
