import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMessageHomeComponent } from './home/GroupMessage-home.component';
import { GroupMessageNewComponent } from './new/GroupMessage-new.component';
import { GroupMessageDetailComponent } from './detail/GroupMessage-detail.component';

const routes: Routes = [
  {path: '', component: GroupMessageHomeComponent},
  { path: 'new', component: GroupMessageNewComponent },
  { path: ':id', component: GroupMessageDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GroupMessage-detail-permissions'
      }
    }
  }
];

export const GROUPMESSAGE_MODULE_DECLARATIONS = [
    GroupMessageHomeComponent,
    GroupMessageNewComponent,
    GroupMessageDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupMessageRoutingModule { }