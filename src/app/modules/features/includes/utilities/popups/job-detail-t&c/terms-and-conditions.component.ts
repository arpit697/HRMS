import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent {
  constructor(
    public dialogRef: MatDialogRef<TermsAndConditionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  close() {
    this.dialogRef.close();
  }
  termsAndConditions = [
    'Bonus will be paid out once the referred candidate completes 3 months with the organization.',
    'There is no cap on the number of referrals an employee can make. Every single hiring will make you eligible and all bonus will be paid accordingly.',
    'If two or more employees refer the same candidate, only the first referrer will receive their bonus rewards.',
    'Referral policy is applicable only on 1+ year of experience candidate.',
    'Only permanent employees of Appinventiv will be eligible for referral amounts.',
  ];
}
