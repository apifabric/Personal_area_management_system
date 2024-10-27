import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserReport-card.component.html',
  styleUrls: ['./UserReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserReport-card]': 'true'
  }
})

export class UserReportCardComponent {


}