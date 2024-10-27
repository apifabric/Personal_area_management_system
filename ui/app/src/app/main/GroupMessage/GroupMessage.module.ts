import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GROUPMESSAGE_MODULE_DECLARATIONS, GroupMessageRoutingModule} from  './GroupMessage-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GroupMessageRoutingModule
  ],
  declarations: GROUPMESSAGE_MODULE_DECLARATIONS,
  exports: GROUPMESSAGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupMessageModule { }