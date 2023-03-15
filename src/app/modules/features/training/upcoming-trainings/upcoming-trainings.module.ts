import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { MatCardModule } from '@angular/material/card';
import { RuTrainingCardModule } from 'src/app/modules/common/modules/ru-training-card/ru-training-card.module';
import { UPCOMING_TRAINING_DATA } from 'src/app/constants/app.constants';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [UpcomingTrainingsComponent],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    RuTrainingCardModule,
    ...MATERIAL,
  ],
})
export class UpcomingTrainingsModule {}
