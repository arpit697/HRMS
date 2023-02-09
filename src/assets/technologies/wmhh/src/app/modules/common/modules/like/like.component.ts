import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
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
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import { UtilityService } from "src/app/services/utility.service";
import { LikeService } from "./like.service";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"],
})
export class LikeComponent implements OnInit {
  @Input() isBorder: boolean = true;
  @Input() liked: boolean = false;
  @Input() moduleName: MODULENAMES = null;
  @Input() moduleId: string = null;

  @Input() contentType: string = null;

  @Input() contentName: string = null;

  @Input() noOfLikes: number = 0;
  @Input() hideLikeCount: boolean = false;
  @Output() statusChanged: EventEmitter<any> = new EventEmitter();
  public MODULE_NAME_ENUM = MODULENAMES;
  loggedIn: boolean = false;
  userProfile: any = null;
  sub: Subscription = new Subscription();
  constructor(
    private likeService: LikeService,
    private utility: UtilityService,
    private dialog: MatDialog,
    private accountService: AccountService,
    private gaService: GoogleAnalyticsService
  ) {
    this.loggedIn = !!this.utility.getAuthToken();
    if (this.utility.getAuthToken()) {
      this.getUserProfile();
    }
  }

  ngOnInit(): void {
    // console.log(this.moduleId);
  }

  async getUserProfile() {
    this.userProfile = await this.utility.getProfileDetail();
  }

  async toggleLike() {
    const payload = {
      moduleId: this.moduleId,
      moduleName: this.moduleName,
    };
    const googleAnalyticsPayload: IGoogleAnalyticsEvent = {
      eventAction: GoogleAnalyticsEventActions.like,
      eventLabel: this.contentName,
      eventCategory: this.contentType,
      eventName: GoogleAnalyticsEventNames.like,
    };
    console.log(googleAnalyticsPayload);

    this.liked = !this.liked;
    if (this.liked) {
      this.noOfLikes += 1;
    } else {
      this.noOfLikes -= 1;
    }

    if (this.utility.getAuthToken()) {
      const payload = {
        moduleId: this.moduleId,
        moduleName: this.moduleName,
        action: ACTIVITYACTION.LIKE,
      };
      await this.likeService.likeContent(payload);
      this.statusChanged.emit(this.moduleId);
    } else {
      try {
        if (this.liked) {
          await this.likeService.likeContentWithoutAuth(payload);
          this.utility.updateCookiesLike(this.moduleId, true);

          this.gaService.eventEmitter({ ...googleAnalyticsPayload });
        } else {
          this.utility.updateCookiesLike(this.moduleId, false);
          // this.noOfLikes -= 1;
        }
        this.statusChanged.emit(this.moduleId);
      } catch (error) {
        if (this.liked) {
          this.noOfLikes -= 1;
        } else {
          this.noOfLikes += 1;
        }
        this.liked = !this.liked;
      }
    }
  }

  // async toogleLike() {
  //   if (this.utility.getAuthToken()) {
  //     if (!this.utility.getEmailVerifiedToken() || this.utility.getEmailVerifiedToken() ==='false') {
  //       const dialogData: IPopupData = {
  //         cancelButtonText: "Cancel",
  //         confirmButtonText: "Resend",
  //         message:
  //           "Please verify your email before liking this resource. If you haven't recieved a verification email, click resend",
  //       };
  //       const dialogRef = this.utility.openDialog(dialogData);
  //       this.sub.add(
  //         dialogRef.subscribe(async (resend) => {
  //           if (resend) {
  //             let {
  //               message,
  //             } = await this.accountService.resendVerificationEmail();
  //             this.utility.showAlert(message);
  //           }
  //         })
  //       );
  //       return;
  //     }
  //     const payload = {
  //       moduleId: this.moduleId,
  //       moduleName: this.moduleName,
  //       action: ACTIVITYACTION.LIKE,
  //     };
  //     this.liked = !this.liked;
  //     if (this.liked) {
  //       this.noOfLikes += 1;
  //     } else {
  //       this.noOfLikes -= 1;
  //     }
  //     try {
  //       await this.likeService.likeContent(payload);
  //       this.statusChanged.emit(this.moduleId);
  //     } catch (error) {
  //       if (this.liked) {
  //         this.noOfLikes -= 1;
  //       } else {
  //         this.noOfLikes += 1;
  //       }
  //       this.liked = !this.liked;
  //     }
  //   } else {
  //     this.openLogin();
  //   }
  // }

  openLogin() {
    this.dialog.open(LoginComponent, {
      disableClose: true,
      autoFocus: false,
    });
  }
}
