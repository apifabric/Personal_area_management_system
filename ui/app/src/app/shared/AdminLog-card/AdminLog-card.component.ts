import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AdminLog-card.component.html',
  styleUrls: ['./AdminLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AdminLog-card]': 'true'
  }
})

export class AdminLogCardComponent {


}