import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LUNCH } from 'src/app/constants/routes';

@Component({
  selector: 'app-purchase-lunch-coupon',
  templateUrl: './purchase-lunch-coupon.component.html',
  styleUrls: ['./purchase-lunch-coupon.component.scss'],
})
export class PurchaseLunchCouponComponent {
  constructor(private _router: Router) {}
  backHandler() {
    this._router.navigate([LUNCH.fullUrl]);
  }
}
