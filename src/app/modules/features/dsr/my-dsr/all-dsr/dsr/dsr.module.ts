import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [
  MatCardModule
];
@NgModule({
  declarations: [
    DsrComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule,
    RuTableModule,
    ...MATERIAL
  ]
})
export class DsrModule { }
