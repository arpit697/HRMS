import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchComponent } from './lunch.component';
import { PURCHASE_LUNCH_COUPON } from 'src/app/constants/routes';

const routes: Routes = [
  { path: '', component: LunchComponent },
  {
    path: PURCHASE_LUNCH_COUPON.path,
    loadChildren: () =>
      import('./purchase-lunch-coupon/purchase-lunch-coupon.module').then(
        (m) => m.PurchaseLunchCouponModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunchRoutingModule {}
