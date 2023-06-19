import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from './auth.actions';

export interface State {
  token: any;
  loginError?: any;
}

export const initialState: State = {
  token: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, response: any) => {
    return {
      ...state,
      token: response.loginSuccessResponse.token,
    };
  }),
  on(loginFailure, (state, error: any) => {
    return {
      ...state,
      loginError: error,
    };
  }),
  on(logout, (state) => ({ ...state, token: null }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
