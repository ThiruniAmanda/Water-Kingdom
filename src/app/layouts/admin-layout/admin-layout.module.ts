import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDetailsComponent } from 'app/pages/add-details/add-details.component';
import { AddItemDetailsComponent } from 'app/pages/add-item-details/add-item-details.component';
import { ConfirmEqualValidatorDirective } from 'app/shared/confirm-equal-validator.directive';
import { TableModule } from 'app/pages/table/table.module';
import { SettingsComponent } from 'app/pages/settings/settings.component';
import { UpdateDataComponent } from 'app/pages/update-data/update-data.component';
import { DeletedFishDetailsComponent } from 'app/pages/deleted-fish-details/deleted-fish-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    // AddItemDetailsComponent,
    // IconsComponent,
    AddDetailsComponent,
    // MapsComponent,
    NotificationsComponent,
    SettingsComponent,
    UpdateDataComponent,
    DeletedFishDetailsComponent
   
  ]
})

export class AdminLayoutModule {}
