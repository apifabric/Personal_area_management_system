import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Admin', loadChildren: () => import('./Admin/Admin.module').then(m => m.AdminModule) },
    
        { path: 'AdminLog', loadChildren: () => import('./AdminLog/AdminLog.module').then(m => m.AdminLogModule) },
    
        { path: 'Group', loadChildren: () => import('./Group/Group.module').then(m => m.GroupModule) },
    
        { path: 'GroupMember', loadChildren: () => import('./GroupMember/GroupMember.module').then(m => m.GroupMemberModule) },
    
        { path: 'GroupMessage', loadChildren: () => import('./GroupMessage/GroupMessage.module').then(m => m.GroupMessageModule) },
    
        { path: 'Message', loadChildren: () => import('./Message/Message.module').then(m => m.MessageModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserActivity', loadChildren: () => import('./UserActivity/UserActivity.module').then(m => m.UserActivityModule) },
    
        { path: 'UserFeedback', loadChildren: () => import('./UserFeedback/UserFeedback.module').then(m => m.UserFeedbackModule) },
    
        { path: 'UserReport', loadChildren: () => import('./UserReport/UserReport.module').then(m => m.UserReportModule) },
    
        { path: 'UserSetting', loadChildren: () => import('./UserSetting/UserSetting.module').then(m => m.UserSettingModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }