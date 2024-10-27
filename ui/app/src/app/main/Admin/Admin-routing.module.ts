import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './home/Admin-home.component';
import { AdminNewComponent } from './new/Admin-new.component';
import { AdminDetailComponent } from './detail/Admin-detail.component';

const routes: Routes = [
  {path: '', component: AdminHomeComponent},
  { path: 'new', component: AdminNewComponent },
  { path: ':id', component: AdminDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Admin-detail-permissions'
      }
    }
  },{
    path: ':admin_id/AdminLog', loadChildren: () => import('../AdminLog/AdminLog.module').then(m => m.AdminLogModule),
    data: {
        oPermission: {
            permissionId: 'AdminLog-detail-permissions'
        }
    }
},{
    path: ':reporter_id/UserReport', loadChildren: () => import('../UserReport/UserReport.module').then(m => m.UserReportModule),
    data: {
        oPermission: {
            permissionId: 'UserReport-detail-permissions'
        }
    }
}
];

export const ADMIN_MODULE_DECLARATIONS = [
    AdminHomeComponent,
    AdminNewComponent,
    AdminDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }