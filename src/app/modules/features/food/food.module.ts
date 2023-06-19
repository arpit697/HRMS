import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { StoreModule } from '@ngrx/store';
import { NUMBER_OF_COUPON } from 'src/app/states/purchaseCupon/purchase.selector';
import { NumberOfCouponReducer } from 'src/app/states/purchaseCupon/purchase.reducer';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChunkModule } from 'src/app/pipes/chunk/chunk.module';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    ...MATERIAL,
    ChunkModule,
    StoreModule.forFeature(NUMBER_OF_COUPON, NumberOfCouponReducer),
  ],
})
export class FoodModule {}
