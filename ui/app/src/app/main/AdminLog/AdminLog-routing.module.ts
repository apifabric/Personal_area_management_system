import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogHomeComponent } from './home/AdminLog-home.component';
import { AdminLogNewComponent } from './new/AdminLog-new.component';
import { AdminLogDetailComponent } from './detail/AdminLog-detail.component';

const routes: Routes = [
  {path: '', component: AdminLogHomeComponent},
  { path: 'new', component: AdminLogNewComponent },
  { path: ':id', component: AdminLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AdminLog-detail-permissions'
      }
    }
  }
];

export const ADMINLOG_MODULE_DECLARATIONS = [
    AdminLogHomeComponent,
    AdminLogNewComponent,
    AdminLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLogRoutingModule { }