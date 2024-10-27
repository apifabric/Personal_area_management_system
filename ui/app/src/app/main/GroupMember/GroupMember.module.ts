import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GROUPMEMBER_MODULE_DECLARATIONS, GroupMemberRoutingModule} from  './GroupMember-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GroupMemberRoutingModule
  ],
  declarations: GROUPMEMBER_MODULE_DECLARATIONS,
  exports: GROUPMEMBER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupMemberModule { }