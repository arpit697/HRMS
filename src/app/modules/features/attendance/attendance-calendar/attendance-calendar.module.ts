import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceCalendarRoutingModule } from './attendance-calendar-routing.module';
import { AttendanceCalendarComponent } from './attendance-calendar.component';


@NgModule({
  declarations: [
    AttendanceCalendarComponent
  ],
  imports: [
    CommonModule,
    AttendanceCalendarRoutingModule
  ]
})
export class AttendanceCalendarModule { }
