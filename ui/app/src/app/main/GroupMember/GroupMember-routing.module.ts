import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMemberHomeComponent } from './home/GroupMember-home.component';
import { GroupMemberNewComponent } from './new/GroupMember-new.component';
import { GroupMemberDetailComponent } from './detail/GroupMember-detail.component';

const routes: Routes = [
  {path: '', component: GroupMemberHomeComponent},
  { path: 'new', component: GroupMemberNewComponent },
  { path: ':id', component: GroupMemberDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GroupMember-detail-permissions'
      }
    }
  }
];

export const GROUPMEMBER_MODULE_DECLARATIONS = [
    GroupMemberHomeComponent,
    GroupMemberNewComponent,
    GroupMemberDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupMemberRoutingModule { }