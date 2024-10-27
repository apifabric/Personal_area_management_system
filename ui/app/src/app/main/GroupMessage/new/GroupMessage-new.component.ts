import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GroupMessage-new',
  templateUrl: './GroupMessage-new.component.html',
  styleUrls: ['./GroupMessage-new.component.scss']
})
export class GroupMessageNewComponent {
  @ViewChild("GroupMessageForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}