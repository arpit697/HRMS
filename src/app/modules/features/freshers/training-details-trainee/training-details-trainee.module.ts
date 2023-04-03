import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsTraineeRoutingModule } from './training-details-trainee-routing.module';
import { TrainingDetailsTraineeComponent } from './training-details-trainee.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [
  MatCardModule
]

@NgModule({
  declarations: [
    TrainingDetailsTraineeComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsTraineeRoutingModule,
    ...MATERIAL
  ]
})
export class TrainingDetailsTraineeModule { }
