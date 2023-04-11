import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceCalendarRoutingModule } from './attendance-calendar-routing.module';
import { AttendanceCalendarComponent } from './attendance-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatCardModule } from '@angular/material/card';
const MATERIAL = [MatCardModule];
@NgModule({
  declarations: [AttendanceCalendarComponent],
  imports: [
    CommonModule,
    AttendanceCalendarRoutingModule,
    ...MATERIAL,
    FullCalendarModule,
  ],
})
export class AttendanceCalendarModule {}
