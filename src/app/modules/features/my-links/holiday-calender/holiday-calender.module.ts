import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalenderRoutingModule } from './holiday-calender-routing.module';
import { HolidayCalenderComponent } from './holiday-calender.component';
import { MatCardModule } from '@angular/material/card';
const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [
    HolidayCalenderComponent
  ],
  imports: [
    CommonModule,
    HolidayCalenderRoutingModule , 
    MATERIAL
  ]
})
export class HolidayCalenderModule { }
