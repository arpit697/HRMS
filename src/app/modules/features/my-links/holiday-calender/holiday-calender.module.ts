import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalenderRoutingModule } from './holiday-calender-routing.module';
import { HolidayCalenderComponent } from './holiday-calender.component';


@NgModule({
  declarations: [
    HolidayCalenderComponent
  ],
  imports: [
    CommonModule,
    HolidayCalenderRoutingModule
  ]
})
export class HolidayCalenderModule { }
