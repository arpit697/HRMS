import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';


@NgModule({
  declarations: [
    RequestedTrainingsComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingsRoutingModule
  ]
})
export class RequestedTrainingsModule { }
