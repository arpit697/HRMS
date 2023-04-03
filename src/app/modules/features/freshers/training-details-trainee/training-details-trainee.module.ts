import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsTraineeRoutingModule } from './training-details-trainee-routing.module';
import { TrainingDetailsTraineeComponent } from './training-details-trainee.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { AdvanceComponent } from './advance/advance.component';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    TrainingDetailsTraineeComponent,
    TrainingDetailsComponent,
    SubTopicsComponent,
    AdvanceComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsTraineeRoutingModule,
    RuTableModule,
    ...MATERIAL
  ]
})
export class TrainingDetailsTraineeModule { }
