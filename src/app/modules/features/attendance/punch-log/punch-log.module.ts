import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
];

@NgModule({
  declarations: [PunchLogComponent],
  imports: [CommonModule, PunchLogRoutingModule, RuTableModule, ...MATERIAL],
})
export class PunchLogModule { }
