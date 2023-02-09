import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y";
import { Component, OnInit, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Subscription } from "rxjs";
import { DISCOVER, SEARCH } from "src/app/constant/routes";
import { IPopupData } from "src/app/models/popup";
import { LoaderService } from "src/app/services/loader.service";
import { MagicService } from "src/app/services/magic.service";
import { UtilityService } from "src/app/services/utility.service";
import { AccountService } from "../../account/account.service";
import { LoginComponent } from "../../account/login/login.component";
import { SignUpComponent } from "../../account/sign-up/sign-up.component";
import { HelpUsComponent } from "../../common/components/help-us/help-us.component";
import { ThankYouComponent } from "../../common/components/thank-you/thank-you.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  profileData: any = null;
  userLoggedIn: boolean = false;
  sub: Subscription = new Subscription();

  isActiveClass: boolean = false;

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService,
    private utility: UtilityService,
    private router: Router,
    private magicService: MagicService,
    private loader: LoaderService,
    private cookieService: CookieService
  ) {
    this.userLoggedIn = !!this.utility.getAuthToken();
    this.subscribeToLoginChanged();
    this.getPorfile();

    this.accountService.logoutSuccess.subscribe((data) => {
      this.userLoggedIn = data;
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      this.isActiveClass = true;
    } else {
      this.isActiveClass = false;
    }
  }

  ngOnInit(): void {}

  subscribeToLoginChanged() {
    this.accountService.loginSuccess.subscribe((success) => {
      if (success) {
        this.getPorfile();
      }
    });
  }
  getPorfile() {
    this.utility.profileDetail.subscribe((data) => {
      this.profileData = data;
      // console.log(data);
      if (data) {
        this.userLoggedIn = true;
      }
    });
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }

  openSignUp() {
    this.dialog.open(SignUpComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }

  openHelpUs() {
    this.dialog.open(HelpUsComponent, {
      width: "404px",
      disableClose: true,
      autoFocus: false,
    });
  }

  async logout() {
    const popupData: IPopupData = {
      message: "Are you sure you want to logout?",
    };
    const dialogRef = this.utility.openDialog(popupData);
    this.sub.add(
      dialogRef.subscribe(async (data) => {
        if (data) {
          let res: any = await this.accountService.logout();
          if (res) {
            // this.utility.showAlert(res.message);
            this.loader.loader.next(true);
            await this.magicService.magic_social.user.logout();
            this.loader.loader.next(false);

            this.utility.clearStorage();
            this.userLoggedIn = false;
            // console.log("came,", this.userLoggedIn);
            this.utility.profileDetail.next(null);
            this.accountService.logoutSuccess.next(false);
            this.cookieService.delete("searchText");

            this.router.navigate(["/"]);
            // location.reload();
            // await this.magicService.magic_social.user.logout();
          }
        }
      })
    );
  }
}
