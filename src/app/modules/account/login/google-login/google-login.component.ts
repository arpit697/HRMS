import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { JsonPipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FEATURES } from 'src/app/constants/routes';
import { UtilityService } from 'src/app/services/utility/utility.service';
declare const gapi: any;
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
  private auth2: any;
  loggedIn!: boolean;
  user!: any;

  constructor(
    private authService: SocialAuthService,
    private _router: Router,
    private _utility: UtilityService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user: any) => {
      this.user = user;
      if (user != null) {
        sessionStorage.setItem('login', JSON.stringify(true));
        this._router.navigate([FEATURES.path]);
        this._utility.bar('login successfully', '', 'green-snackbar');
      }
    });
  }

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): any {
    this.authService.signOut();
  }
}
