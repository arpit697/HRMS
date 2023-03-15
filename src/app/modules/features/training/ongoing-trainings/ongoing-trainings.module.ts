import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTrainingsRoutingModule } from './ongoing-trainings-routing.module';
import { OngoingTrainingsComponent } from './ongoing-trainings.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [OngoingTrainingsComponent],
  imports: [CommonModule, OngoingTrainingsRoutingModule, ...MATERIAL],
})
export class OngoingTrainingsModule {}
