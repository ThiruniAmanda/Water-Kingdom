import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AddDetailsComponent } from 'app/pages/add-details/add-details.component';
import { AddItemDetailsComponent } from 'app/pages/add-item-details/add-item-details.component';
import { SettingsComponent } from 'app/pages/settings/settings.component';
import { UpdateDataComponent } from 'app/pages/update-data/update-data.component';
import { DeletedFishDetailsComponent } from 'app/pages/deleted-fish-details/deleted-fish-details.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'data',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'add-fish-details',    component: AddDetailsComponent },
    { path:'settings' , component:SettingsComponent},
    { path:'update/:code' , component:UpdateDataComponent},
    { path:'deleted_records' , component:DeletedFishDetailsComponent}
    // { path: 'add-item-details',    component: AddItemDetailsComponent },
    //  { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
];
