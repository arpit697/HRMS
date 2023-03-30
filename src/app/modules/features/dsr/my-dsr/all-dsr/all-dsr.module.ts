import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDsrRoutingModule } from './all-dsr-routing.module';
import { AllDsrComponent } from './all-dsr.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [
  MatCardModule
];

@NgModule({
  declarations: [
    AllDsrComponent
  ],
  imports: [
    CommonModule,
    AllDsrRoutingModule,
    RuTableModule,
    ...MATERIAL
  ]
})
export class AllDsrModule { }
