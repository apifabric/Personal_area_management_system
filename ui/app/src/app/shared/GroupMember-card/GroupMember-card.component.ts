import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GroupMember-card.component.html',
  styleUrls: ['./GroupMember-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GroupMember-card]': 'true'
  }
})

export class GroupMemberCardComponent {


}