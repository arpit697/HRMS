import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';


@NgModule({
  declarations: [
    MyTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule
  ]
})
export class MyTrainingsModule { }
