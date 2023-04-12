import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];
@NgModule({
  declarations: [LunchComponent],
  imports: [CommonModule, LunchRoutingModule, ...MATERIAL],
})
export class LunchModule {}
