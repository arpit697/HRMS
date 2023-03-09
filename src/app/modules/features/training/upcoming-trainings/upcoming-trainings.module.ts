import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule
  ]
})
export class UpcomingTrainingsModule { }
