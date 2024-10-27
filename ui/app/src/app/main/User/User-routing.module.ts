import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/GroupMember', loadChildren: () => import('../GroupMember/GroupMember.module').then(m => m.GroupMemberModule),
    data: {
        oPermission: {
            permissionId: 'GroupMember-detail-permissions'
        }
    }
},{
    path: ':sender_id/GroupMessage', loadChildren: () => import('../GroupMessage/GroupMessage.module').then(m => m.GroupMessageModule),
    data: {
        oPermission: {
            permissionId: 'GroupMessage-detail-permissions'
        }
    }
},{
    path: ':receiver_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':sender_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':user_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':user_id/UserActivity', loadChildren: () => import('../UserActivity/UserActivity.module').then(m => m.UserActivityModule),
    data: {
        oPermission: {
            permissionId: 'UserActivity-detail-permissions'
        }
    }
},{
    path: ':user_id/UserFeedback', loadChildren: () => import('../UserFeedback/UserFeedback.module').then(m => m.UserFeedbackModule),
    data: {
        oPermission: {
            permissionId: 'UserFeedback-detail-permissions'
        }
    }
},{
    path: ':user_id/UserReport', loadChildren: () => import('../UserReport/UserReport.module').then(m => m.UserReportModule),
    data: {
        oPermission: {
            permissionId: 'UserReport-detail-permissions'
        }
    }
},{
    path: ':user_id/UserSetting', loadChildren: () => import('../UserSetting/UserSetting.module').then(m => m.UserSettingModule),
    data: {
        oPermission: {
            permissionId: 'UserSetting-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }