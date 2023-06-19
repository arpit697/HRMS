import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FEATURES } from '../../constants/routes';
import * as fromAuth from '../../states/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { Observable, take, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LognGuard implements CanActivate {
  jwtToken$: Observable<any> = this._store.select(fromAuth.selectToken);

  constructor(private _store: Store<fromAuth.State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.jwtToken$.pipe(
      take(1),
      tap((token: any) => {
        if (token != null) {
          console.log(
            'User is already logged in. Redirecting to FEATURES module.'
          );
          this.router.navigate([FEATURES.fullUrl]);
        } else {
          console.log(
            'User is not logged in. Allowing access to LOGIN module.'
          );
        }
      }),
      map((token: any) => token == null)
    );
  }
}
