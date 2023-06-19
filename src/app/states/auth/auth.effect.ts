import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { HttpClient } from '@angular/common/http';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { ACCOUNT, FEATURES } from 'src/app/constants/routes';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) => {
        console.log(action);
        
        if (action.token) {
          return of(
            AuthActions.loginSuccess({
              loginSuccessResponse: {
                token: action.token,
                message: 'Login Success',
              },
            })
          );
        } else if (action.email && action.password) {
          return this.http
            .post<{ token: string }>('http://localhost:8000/api/user/login', {
              email: action.email,
              password: action.password,
            })
            .pipe(
              // tap((response) =>
              //   console.log('Login success response:', response)
              // ),
              map((loginResponse: any) =>
                AuthActions.loginSuccess({
                  loginSuccessResponse: loginResponse,
                })
              ),
              catchError((error) => of(AuthActions.loginFailure({ error })))
            );
        } else {
          return of(AuthActions.loginFailure({ error: 'Invalid request' }));
        }
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action: { loginSuccessResponse: any }) => {
          const loginResponse = action.loginSuccessResponse;
          if (loginResponse.token != null) {
            this.router.navigateByUrl(FEATURES.path);
            this.utility.bar(loginResponse.message, '', 'green-snackbar');
          } else if (loginResponse == null) {
            console.log('token is null now');
          } else {
            this.utility.bar(loginResponse.message, '', 'red-snackbar');
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    public utility: UtilityService,
    private http: HttpClient
  ) {}
}
