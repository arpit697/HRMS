import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseLunchCouponRoutingModule } from './purchase-lunch-coupon-routing.module';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ChunkModule } from 'src/app/pipes/chunk/chunk.module';

const MATERIAL = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [PurchaseLunchCouponComponent],
  imports: [
    CommonModule,
    PurchaseLunchCouponRoutingModule,
    ReactiveFormsModule,
    ChunkModule,
    ...MATERIAL,
  ],
})
export class PurchaseLunchCouponModule {}
