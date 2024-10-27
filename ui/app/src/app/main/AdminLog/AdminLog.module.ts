import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ADMINLOG_MODULE_DECLARATIONS, AdminLogRoutingModule} from  './AdminLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AdminLogRoutingModule
  ],
  declarations: ADMINLOG_MODULE_DECLARATIONS,
  exports: ADMINLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminLogModule { }