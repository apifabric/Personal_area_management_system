import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GroupMember-new',
  templateUrl: './GroupMember-new.component.html',
  styleUrls: ['./GroupMember-new.component.scss']
})
export class GroupMemberNewComponent {
  @ViewChild("GroupMemberForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}