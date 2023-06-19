import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ACCOUNT, HOME, LOGIN } from '../../constants/routes';
import * as fromAuth from '../../../app/states/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  jwtToken$: Observable<any> = this._store.select(fromAuth.selectToken);

  constructor(private _store: Store<fromAuth.State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.jwtToken$.pipe(
      take(1),
      map((token: any) => {
        if (token != null) {
          return true; // User has a token, allow access to the home module
        } else {
          this.router.navigate([ACCOUNT.fullUrl]);
          return false; // User does not have a token, prevent access to the home module
        }
      })
    );
  }
}
