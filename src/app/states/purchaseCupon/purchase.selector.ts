import { createFeatureSelector } from "@ngrx/store"

export const NUMBER_OF_COUPON = 'get_number_of_coupon'
export const getNumberOfCouponSelector = createFeatureSelector(NUMBER_OF_COUPON)