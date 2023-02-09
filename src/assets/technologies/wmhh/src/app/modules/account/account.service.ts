import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ACTIVITYACTION } from "src/app/constant/app-constant";
import {
  CONTENT_LIST_GET_BY_ACTIVITY,
  DELTE_ACCOUNT,
  FORGOT_PASSWORD_PATCH,
  FULL_CONTENT_LIST_GET_BY_ACTIVITY,
  GOALS_GET,
  LOGIN_POST,
  LOGOUT_PUT,
  RESEND_EMAIL_GET,
  RESET_PASSWORD_PATCH,
  SAVE_PREFERENCES_PATHC,
  SECTORS_GET,
  SEND_OTP_GET,
  SIGNUP_POST,
  SOCIAL_LOGIN,
  VERIFY_AUTH_TOKEN,
  VERIFY_OTP_POST,
} from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { StrapiService } from "src/app/services/strapi.service";
import { UtilityService } from "src/app/services/utility.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  loginSuccess: BehaviorSubject<boolean> = new BehaviorSubject(false);
  logoutSuccess: Subject<boolean> = new Subject();
  constructor(
    private http: HttpService,
    private utility: UtilityService,
    private strapiService: StrapiService
  ) {}

  /**
   * @description will do api hit for login
   * @param payload
   * @returns promise as result
   */
  login(payload: any): Promise<any> {
    return this.http
      .post(LOGIN_POST, payload, { showLoader: true })
      .toPromise();
  }

  /**
   * @description will do api hit for signup a user
   * @param payload
   * @returns promise as result
   */
  signup(payload: any): Promise<any> {
    return this.http
      .post(SIGNUP_POST, payload, { showLoader: true })
      .toPromise();
  }

  getProfile() {}

  afterLoginSuccess(data: any): void {
    this.utility.setToken(data.authToken);
    this.utility.setEmailVerifiedToken(data.emailVerified);
    this.loginSuccess.next(true);
  }

  /**
   * @description will do api hit for logout
   */
  logout(): Promise<any> {
    return this.http.put(LOGOUT_PUT, {}, { showLoader: true }).toPromise();
  }

  /**
   * Will do api hit for setting preferences for content for a user and will also consist user profile
   */
  savePreferences(payload: any): Promise<any> {
    return this.http
      .patch(SAVE_PREFERENCES_PATHC, payload, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for fetching goals list from strapi
   */
  getGoalsListing(): Promise<any> {
    return this.http.get(GOALS_GET, {}, { showLoader: true }).toPromise();
  }

  /**
   * Will do api hit for fetching sectors list from strapi
   */
  getSectorsListing(): Promise<any> {
    return this.http.get(SECTORS_GET, {}, { showLoader: true }).toPromise();
  }

  /**
   * Will do api hit for sending email for forogt password
   * @param payload
   */
  forgotPassword(payload: any): Promise<any> {
    return this.http
      .patch(FORGOT_PASSWORD_PATCH, payload, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for verifying auth token
   * @param authToken
   */
  verifyAuthToken(authToken: string): Promise<any> {
    return this.http.get(VERIFY_AUTH_TOKEN(authToken)).toPromise();
  }

  /**
   * Will do api hit for resetting password
   * @param payload token, password
   */
  resetPassword(payload: any): Promise<any> {
    return this.http
      .patch(RESET_PASSWORD_PATCH, payload, { showLoader: true })
      .toPromise();
  }

  /**
   * Will send otp to the registered number
   */
  sendOtp(): Promise<any> {
    return this.http.get(SEND_OTP_GET, {}, { showLoader: true }).toPromise();
  }

  /**
   * Will verify otp sent to the registered number
   */
  verifyOtp(payload: any): Promise<any> {
    return this.http
      .post(VERIFY_OTP_POST, payload, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for fetching list of content based on user actions - saved,liked etc
   * @param action
   */
  getFullContentListByActivity(
    action: ACTIVITYACTION,
    pageOptions: any
  ): Promise<any> {
    return this.http
      .get(FULL_CONTENT_LIST_GET_BY_ACTIVITY(action), pageOptions, {
        showLoader: true,
      })
      .toPromise();
  }

  /**
   * Will delete user account
   */
  deleteAccount(): Promise<any> {
    return this.http
      .delete(DELTE_ACCOUNT, {}, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for resending email for verification
   */
  resendVerificationEmail(): Promise<any> {
    return this.http.get(RESEND_EMAIL_GET).toPromise();
  }

  /**
   * Will do api hit for all types of social logins
   */
  socialLogin(payload: any): Promise<any> {
    return this.http.post(SOCIAL_LOGIN, payload).toPromise();
  }
}
