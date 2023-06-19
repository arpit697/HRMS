import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PURCHASE_LUNCH_COUPON } from 'src/app/constants/routes';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  currentMonth: Date = new Date();
  days: Date[] = [];
  isWeekend: (day: Date) => boolean;
  isPast: (day: Date) => boolean;
  isCurrent: (day: Date) => boolean;
  isFuture: (day: Date) => boolean;

  constructor(private _router: Router) {
    this.isWeekend = (day: Date) => {
      const dayOfWeek = day.getDay();
      return dayOfWeek === 0 || dayOfWeek === 6;
    };

    this.isPast = (day: Date) => {
      return day.getTime() < new Date().setHours(0, 0, 0, 0);
    };

    this.isCurrent = (day: Date) => {
      return day.toDateString() === new Date().toDateString();
    };

    this.isFuture = (day: Date) => {
      return day.getTime() > new Date().setHours(0, 0, 0, 0);
    };

    this.generateCalendar();
  }

  generateCalendar() {
    let daysInMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    ).getDate();

    let firstDayOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    );

    let firstDayOfWeek = firstDayOfMonth.getDay() - 1;
    if (firstDayOfWeek === -1) {
      firstDayOfWeek = 6;
    }

    let days: any = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        new Date(
          this.currentMonth.getFullYear(),
          this.currentMonth.getMonth(),
          i
        )
      );
    }

    const totalCells = 35; // 6 rows x 7 columns
    const numDays = days.length;
    const numEmptyCells = totalCells - numDays;
    for (let i = 0; i < numEmptyCells; i++) {
      days.push(null);
    }

    this.days = days;
  }

  prevMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.generateCalendar();
  }

  puchaseCouponsHandler() {
    this._router.navigate([PURCHASE_LUNCH_COUPON.fullUrl]);
  }
}
