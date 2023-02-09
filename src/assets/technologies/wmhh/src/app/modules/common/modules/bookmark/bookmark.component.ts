import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CookieService } from "ngx-cookie-service";
import { Subscription } from "rxjs";
import { ACTIVITYACTION, MODULENAMES } from "src/app/constant/app-constant";
import {
  GoogleAnalyticsEventActions,
  GoogleAnalyticsEventNames,
} from "src/app/constant/enums";
import { IGoogleAnalyticsEvent } from "src/app/constant/interface";
import { IPopupData } from "src/app/models/popup";
import { AccountService } from "src/app/modules/account/account.service";
import { LoginComponent } from "src/app/modules/account/login/login.component";
import { RegisterPopupComponent } from "src/app/modules/account/register-popup/register-popup.component";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import { UtilityService } from "src/app/services/utility.service";
import { environment } from "src/environments/environment";
import { BookmarkService } from "./bookmark.service";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"],
})
export class BookmarkComponent implements OnInit {
  @Input() saved: boolean = false;

  @Input() isBorder: boolean = true;
  @Input() contentType: string = null;

  @Input() contentName: string = null;
  @Input() moduleName: MODULENAMES = null;
  @Input() moduleId: string = null;
  @Output() statusChanged: EventEmitter<any> = new EventEmitter();
  userProfile: any = null;
  sub: Subscription = new Subscription();

  constructor(
    private bookmarkSerivce: BookmarkService,
    private utility: UtilityService,
    private dialog: MatDialog,
    private accountService: AccountService,
    private gaService: GoogleAnalyticsService,
    private cookieService: CookieService
  ) {
    if (this.utility.getAuthToken()) {
      this.getUserProfile();
    }
  }

  ngOnInit(): void {}

  async getUserProfile() {
    this.userProfile = await this.utility.getProfileDetail();
  }

  async toogleSaved() {
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
      const payload = {
        moduleId: this.moduleId,
        moduleName: this.moduleName,
        action: ACTIVITYACTION.SAVED,
      };
      const googleAnalyticsPayload: IGoogleAnalyticsEvent = {
        eventAction: GoogleAnalyticsEventActions.saved,
        eventLabel: this.contentName,
        eventCategory: this.contentType,
        eventName: GoogleAnalyticsEventNames.saved,
      };
      this.saved = !this.saved;
      try {
        await this.bookmarkSerivce.saveContent(payload);
        if (this.saved) {
          this.gaService.eventEmitter({ ...googleAnalyticsPayload });
        }

        this.statusChanged.emit(this.moduleId);
      } catch (error) {
        this.saved = !this.saved;
      }
    } else {
      const payload = {
        moduleId: this.moduleId,
        moduleName: this.moduleName,
        action: ACTIVITYACTION.SAVED,
      };

      this.cookieService.set(environment.saveLaterKey, JSON.stringify(payload));
      this.openLogin();
    }
  }

  openLogin() {
    this.dialog.open(RegisterPopupComponent, {
      width: "668px",
      disableClose: false,
      autoFocus: false,
      data: {
        heading: "save a resource",
        description:
          "Join for free to get unlimited access to all our resources",
      },
    });
  }
}
