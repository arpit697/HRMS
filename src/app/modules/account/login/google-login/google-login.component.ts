import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FEATURES } from 'src/app/constants/routes';
import * as fromAuth from '../../../../../app/states/auth/auth.reducer';
import * as AuthActions from '../../../../states/auth/auth.actions';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit, OnDestroy {
  socialUser: SocialUser | null = null;
  isLoggedin?: boolean;
  jwtToken$ = this._store.select(fromAuth.selectToken);

  private authStateSubscription: Subscription | undefined;

  constructor(
    private authService: SocialAuthService,
    private _store: Store<fromAuth.State>,
    private _router: Router,
    private _utility: UtilityService
  ) {}

  ngOnInit() {
    this.authStateSubscription = this.authService.authState.subscribe(
      (user: any) => {
        this.socialUser = user;
      }
    );
  }

  signInWithGoogle(): void {
    let userToken = {
      token: this.socialUser?.idToken,
    };
    this._store.dispatch(AuthActions.loginRequest(userToken));
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      this.socialUser = null;
      this._store.dispatch(AuthActions.logout());
    });
  }

  ngOnDestroy(): void {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
      console.log(this.socialUser);
    }
  }
}
