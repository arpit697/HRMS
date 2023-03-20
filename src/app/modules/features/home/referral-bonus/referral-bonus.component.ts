import { Component } from '@angular/core';

@Component({
  selector: 'app-referral-bonus',
  templateUrl: './referral-bonus.component.html',
  styleUrls: ['./referral-bonus.component.scss'],
})
export class ReferralBonusComponent {
  bonuses = [
    { money: '2K', expReq: 'For 3 to 5 Years of experience' },
    { money: '5K', expReq: 'For 5 to 9 Years of experience' },
    { money: '10K', expReq: 'For 9+ Years of experience' },
  ];
}
