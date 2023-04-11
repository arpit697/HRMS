import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseLunchCouponRoutingModule } from './purchase-lunch-coupon-routing.module';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';


@NgModule({
  declarations: [
    PurchaseLunchCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseLunchCouponRoutingModule
  ]
})
export class PurchaseLunchCouponModule { }
