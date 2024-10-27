import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReportHomeComponent } from './home/UserReport-home.component';
import { UserReportNewComponent } from './new/UserReport-new.component';
import { UserReportDetailComponent } from './detail/UserReport-detail.component';

const routes: Routes = [
  {path: '', component: UserReportHomeComponent},
  { path: 'new', component: UserReportNewComponent },
  { path: ':id', component: UserReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserReport-detail-permissions'
      }
    }
  }
];

export const USERREPORT_MODULE_DECLARATIONS = [
    UserReportHomeComponent,
    UserReportNewComponent,
    UserReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserReportRoutingModule { }