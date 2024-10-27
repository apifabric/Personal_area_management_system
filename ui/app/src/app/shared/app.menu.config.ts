import { MenuRootItem } from 'ontimize-web-ngx';

import { AdminCardComponent } from './Admin-card/Admin-card.component';

import { AdminLogCardComponent } from './AdminLog-card/AdminLog-card.component';

import { GroupCardComponent } from './Group-card/Group-card.component';

import { GroupMemberCardComponent } from './GroupMember-card/GroupMember-card.component';

import { GroupMessageCardComponent } from './GroupMessage-card/GroupMessage-card.component';

import { MessageCardComponent } from './Message-card/Message-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserActivityCardComponent } from './UserActivity-card/UserActivity-card.component';

import { UserFeedbackCardComponent } from './UserFeedback-card/UserFeedback-card.component';

import { UserReportCardComponent } from './UserReport-card/UserReport-card.component';

import { UserSettingCardComponent } from './UserSetting-card/UserSetting-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Admin', name: 'ADMIN', icon: 'view_list', route: '/main/Admin' }
    
        ,{ id: 'AdminLog', name: 'ADMINLOG', icon: 'view_list', route: '/main/AdminLog' }
    
        ,{ id: 'Group', name: 'GROUP', icon: 'view_list', route: '/main/Group' }
    
        ,{ id: 'GroupMember', name: 'GROUPMEMBER', icon: 'view_list', route: '/main/GroupMember' }
    
        ,{ id: 'GroupMessage', name: 'GROUPMESSAGE', icon: 'view_list', route: '/main/GroupMessage' }
    
        ,{ id: 'Message', name: 'MESSAGE', icon: 'view_list', route: '/main/Message' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserActivity', name: 'USERACTIVITY', icon: 'view_list', route: '/main/UserActivity' }
    
        ,{ id: 'UserFeedback', name: 'USERFEEDBACK', icon: 'view_list', route: '/main/UserFeedback' }
    
        ,{ id: 'UserReport', name: 'USERREPORT', icon: 'view_list', route: '/main/UserReport' }
    
        ,{ id: 'UserSetting', name: 'USERSETTING', icon: 'view_list', route: '/main/UserSetting' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AdminCardComponent

    ,AdminLogCardComponent

    ,GroupCardComponent

    ,GroupMemberCardComponent

    ,GroupMessageCardComponent

    ,MessageCardComponent

    ,NotificationCardComponent

    ,UserCardComponent

    ,UserActivityCardComponent

    ,UserFeedbackCardComponent

    ,UserReportCardComponent

    ,UserSettingCardComponent

];