import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email?: any; password?: any; token?: any }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginSuccessResponse: any }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
