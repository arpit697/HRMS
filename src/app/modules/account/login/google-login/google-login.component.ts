import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FEATURES } from 'src/app/constants/routes';
import { UtilityService } from 'src/app/services/utility/utility.service';
declare const gapi: any;
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit, OnDestroy {
  loggedIn!: boolean;
  user!: any;
  constructor(
    private authService: SocialAuthService,
    private _router: Router,
    private _utility: UtilityService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user: any) => {
      if (user != null) {
        if (user.email.includes('@appinventiv')) {
          sessionStorage.setItem('login', JSON.stringify(true));
          this._router.navigate([FEATURES.path]);
          this._utility.bar('Login successfully', '', 'green-snackbar');
        } else {
          this._utility.bar('Email is not registered', '', 'red-snackbar');
        }
      }
    });
  }

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): any {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.user = null;
  }
}
