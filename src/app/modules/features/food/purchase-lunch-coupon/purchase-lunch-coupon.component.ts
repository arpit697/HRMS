import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WEEK_DAYS } from 'src/app/constants/drop.down.data';
import { LUNCH, PURCHASE_LUNCH_COUPON } from 'src/app/constants/routes';
import { getNumberOfCoupon } from 'src/app/states/purchaseCupon/purchase.action';
import { getNumberOfCouponSelector } from 'src/app/states/purchaseCupon/purchase.selector';

@Component({
  selector: 'app-purchase-lunch-coupon',
  templateUrl: './purchase-lunch-coupon.component.html',
  styleUrls: ['./purchase-lunch-coupon.component.scss'],
})
export class PurchaseLunchCouponComponent implements OnInit {
  daysOfWeek = [...WEEK_DAYS];

  currentMonth: Date = new Date();
  days: any[] = [];
  isWeekend: (day: Date) => boolean;
  isPast: (day: Date) => boolean;
  isCurrent: (day: Date) => boolean;
  isFuture: (day: Date) => boolean;

  data: any;
  availableCoupons: any;

  constructor(private _router: Router, private store: Store) {
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
  ngOnInit(): void {
    this.store.select(getNumberOfCouponSelector).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
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

    let days = [];
    let availableCoupons = 0;
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth(),
        i
      );

      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        availableCoupons++;
      }

      days.push(currentDate);
    }

    const totalCells = 35; // 6 rows x 7 columns
    const numDays = days.length;
    const numEmptyCells = totalCells - numDays;
    for (let i = 0; i < numEmptyCells; i++) {
      days.push(null);
    }
    this.availableCoupons = availableCoupons;

    this.days = days;
    console.log('Available Coupons:', availableCoupons);
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

  backHandler() {
    this._router.navigate([LUNCH.fullUrl]);
  }

  selectionChange(check: any) {
    console.log(check);
    this.store.dispatch(getNumberOfCoupon({ check: check.checked }));
    // this.availableCoupons = this.availableCoupons - this.data.count;
  }

  get payable() {
    return this.data.value;
  }
}
