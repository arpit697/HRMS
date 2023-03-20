import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeavesRoutingModule } from './floating-leaves-routing.module';
import { FloatingLeavesComponent } from './floating-leaves.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [FloatingLeavesComponent],
  imports: [
    CommonModule,
    FloatingLeavesRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class FloatingLeavesModule {}
