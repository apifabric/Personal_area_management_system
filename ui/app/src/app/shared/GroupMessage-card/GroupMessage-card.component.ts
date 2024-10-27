import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GroupMessage-card.component.html',
  styleUrls: ['./GroupMessage-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GroupMessage-card]': 'true'
  }
})

export class GroupMessageCardComponent {


}