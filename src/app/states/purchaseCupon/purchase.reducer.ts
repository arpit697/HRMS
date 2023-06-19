import { createReducer, on } from '@ngrx/store';
import { counter } from './purchase.store';
import { getNumberOfCoupon } from './purchase.action';

export const NumberOfCouponReducer = createReducer(
  counter,
  on(getNumberOfCoupon, (state, data) => {
    console.log(data, 'sddjcqewu');
    if (data.check == true) {
      let couponCount = state.count + 1;
      return { count: couponCount, value: couponCount * 25 };
    } else {
      let couponCount = state.count - 1;
      return { count: couponCount, value: couponCount * 25 };
    }
  })
);
