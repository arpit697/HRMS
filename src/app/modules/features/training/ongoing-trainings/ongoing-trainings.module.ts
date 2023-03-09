import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTrainingsRoutingModule } from './ongoing-trainings-routing.module';
import { OngoingTrainingsComponent } from './ongoing-trainings.component';


@NgModule({
  declarations: [
    OngoingTrainingsComponent
  ],
  imports: [
    CommonModule,
    OngoingTrainingsRoutingModule
  ]
})
export class OngoingTrainingsModule { }
