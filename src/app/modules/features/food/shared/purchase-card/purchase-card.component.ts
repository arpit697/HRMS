import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PURCHASE_LUNCH_COUPON } from 'src/app/constants/routes';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss'],
})
export class PurchaseCardComponent {
  isChecked = true;
  constructor(private _utility: UtilityService, private _router: Router) {}
  puchaseCouponsHandler() {
    this._router.navigate([PURCHASE_LUNCH_COUPON.fullUrl]);
  }
  onChange() {
    this.isChecked
      ? this._utility.bar(
          'Reminder enabled successfully.',
          '',
          'green-snackbar'
        )
      : this._utility.bar(
          'Reminder disabled successfully.',
          '',
          'red-snackbar'
        );
  }
}
