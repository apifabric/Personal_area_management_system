import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserReport-new',
  templateUrl: './UserReport-new.component.html',
  styleUrls: ['./UserReport-new.component.scss']
})
export class UserReportNewComponent {
  @ViewChild("UserReportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}