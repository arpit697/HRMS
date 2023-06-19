import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';
import { MatCardModule } from '@angular/material/card';
import { ChunkModule } from 'src/app/pipes/chunk/chunk.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AmountCardComponent } from '../shared/amount-card/amount-card.component';
import { PurchaseCardComponent } from '../shared/purchase-card/purchase-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from '../shared/calendar/calendar.component';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
];
@NgModule({
  declarations: [LunchComponent, AmountCardComponent, PurchaseCardComponent , CalendarComponent],
  imports: [
    CommonModule,
    LunchRoutingModule,
    FormsModule,
    ChunkModule,
    ...MATERIAL,
  ],
})
export class LunchModule {}
