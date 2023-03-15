import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';

const MATERIAL = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
];

@NgModule({
  declarations: [ManualPunchComponent],
  imports: [CommonModule, ManualPunchRoutingModule, RuTableModule, ...MATERIAL],
})
export class ManualPunchModule {}
