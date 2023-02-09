import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { DISCOVER, NOTFOUND } from "src/app/constant/routes";
import { EMAIL_VERIFICATION } from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"],
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    private _router: Router,
    private _utilityService: UtilityService,
    private _route: ActivatedRoute,
    private _http: HttpService,
    private next: ActivatedRoute
  ) {
    this._utilityService.setNotFound();
  }

  ngOnInit(): void {
    let token = this.next.snapshot.params.token;

    // let token = "sda";
    if (token) {
      console.log(token);

      // localStorage.setItem(environment.tokenKey, token)
      this.validateEmailToken(token);
    } else {
      this.navigate();
    }
  }
  navigate() {
    this._router.navigate([DISCOVER.fullUrl]);
    return false;
  }
  async validateEmailToken(token) {
    try {
      // verify token
      const res = await this._http
        .get(EMAIL_VERIFICATION, { token })
        .toPromise();

      if (this._utilityService.getAuthToken()) {
        this._utilityService.setEmailVerifiedToken("true");
      }
      this._utilityService.showAlert("Your email is verified successfully !");

      //route
      // this._router.navigate([DISCOVER.fullUrl]);

      // return true;
    } catch (error) {

      console.log('error', error)

      if (error && error instanceof HttpErrorResponse) {
        // this._utilityService.showAlert(error.error.message);
        this._router.navigate(["/link-expired"]);
      }
      // return false;
    }
  }
}
