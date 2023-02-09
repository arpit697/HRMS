import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OAuthRedirectResult } from "@magic-ext/oauth";
import { CookieService } from "ngx-cookie-service";
import { Subscription } from "rxjs";
import {
  GoogleAnalyticsEventActions,
  GoogleAnalyticsEventNames,
  SOCIAL_ID,
  SOCIAL_TYPE,
} from "src/app/constant/enums";
import { IGoogleAnalyticsEvent } from "src/app/constant/interface";
import { DASHBOARD } from "src/app/constant/routes";
import { IPopupData } from "src/app/models/popup";
import { LoaderService } from "src/app/services/loader.service";
import { UtilityService } from "src/app/services/utility.service";
import { environment } from "src/environments/environment";
import { MagicService } from "../../services/magic.service";
import { AccountService } from "../account/account.service";
import { BookmarkService } from "../common/modules/bookmark/bookmark.service";

@Component({
  selector: "app-oauth",
  templateUrl: "./oauth.component.html",
  styleUrls: ["./oauth.component.scss"],
})
export class OauthComponent implements OnInit {
  sub: Subscription = new Subscription();

  constructor(
    private magicService: MagicService,
    private loaderService: LoaderService,
    private router: Router,
    private accountService: AccountService,
    private cookieService: CookieService,
    private utility: UtilityService,
    private bookmarkSerivce: BookmarkService
  ) {
    this.getOauthResult();
  }
  async getOauthResult() {
    this.loaderService.loader.next(true);
    try {
      const result: OAuthRedirectResult =
        await this.magicService.magic_social.oauth.getRedirectResult();
      console.log(result);

      //hit social login api
      const payload = {
        email: result.oauth.userInfo.email,
        signupSource: SOCIAL_TYPE[result.oauth.provider],
        firstName: result.oauth.userInfo.givenName,
        lastName: result.oauth.userInfo.familyName,
        [SOCIAL_ID[result.oauth.provider]]: result.oauth.userHandle,
      };
      try {
        let res = await this.accountService.socialLogin(payload);
        console.log(res);
        this.accountService.afterLoginSuccess(res.data);
        this.handleSaveForLater();
        this.router.navigate([DASHBOARD.fullUrl]);
      } catch (error) {
        this.handleError(error);
      }

      //naviagte to dashboard
      this.loaderService.loader.next(false);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.log(error);
    this.router.navigate(["/"]);
    this.loaderService.loader.next(false);
  }

  async handleSaveForLater() {
    const saveForLaterCookie = this.cookieService.get(environment.saveLaterKey);
    if (saveForLaterCookie && saveForLaterCookie != "null") {
      const payload = { ...JSON.parse(saveForLaterCookie), afterLogin: true };
      if (this.utility.getAuthToken()) {
        if (
          !this.utility.getEmailVerifiedToken() ||
          this.utility.getEmailVerifiedToken() === "false"
        ) {
          const dialogData: IPopupData = {
            cancelButtonText: "Cancel",
            confirmButtonText: "Resend",
            message:
              "Please verify your email before saving this resource. If you haven't recieved a verification email, click resend",
          };
          const dialogRef = this.utility.openDialog(dialogData);
          this.sub.add(
            dialogRef.subscribe(async (resend) => {
              if (resend) {
                let { message } =
                  await this.accountService.resendVerificationEmail();
                this.utility.showAlert(message);
              }
            })
          );
          return;
        }

        // const googleAnalyticsPayload: IGoogleAnalyticsEvent = {
        //   eventAction: GoogleAnalyticsEventActions.saved,
        //   eventLabel: this.contentName,
        //   eventCategory: this.contentType,
        //   eventName: GoogleAnalyticsEventNames.saved,
        // };
        try {
          await this.bookmarkSerivce.saveContent(payload);
          // if (this.saved) {
          //   this.gaService.eventEmitter({ ...googleAnalyticsPayload });
          // }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  ngOnInit(): void {}
}
