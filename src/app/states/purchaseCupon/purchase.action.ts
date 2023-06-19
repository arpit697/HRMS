import { createAction, props } from "@ngrx/store";

export const getNumberOfCoupon = createAction(
    '{Coupon} Number of Coupon',
    props<any>()
  )