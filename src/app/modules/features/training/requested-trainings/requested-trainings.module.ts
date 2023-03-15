import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MATERIAL = [
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [RequestedTrainingsComponent],
  imports: [
    CommonModule,
    RequestedTrainingsRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class RequestedTrainingsModule {}
