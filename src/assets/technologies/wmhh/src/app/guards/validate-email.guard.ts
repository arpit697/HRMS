import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  CanLoad,
  Router,
  ActivatedRoute,
} from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { environment } from "src/environments/environment";
import { EMAIL_VERIFICATION } from "../constant/urls";
import {
  NOTFOUND,
  DISCOVER,
  DASHBOARD,
  VERIFY_EMAIL,
} from "../constant/routes";
import { UtilityService } from "../services/utility.service";
import { HttpErrorResponse } from "@angular/common/http";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class ValidateEmailGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _utilityService: UtilityService,
    private _route: ActivatedRoute,
    private http: HttpService, // private publicService:PublicService
    @Inject(PLATFORM_ID) private platformId: Object // private localStorage: LocalstorageService
  ) {}

  navigate() {
    this._router.navigate([DISCOVER.fullUrl]);
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (isPlatformBrowser(this.platformId)) {
      let token = next.params.token;
      // let token = "sda";
      if (token) {
        console.log(token);

        // localStorage.setItem(environment.tokenKey, token)
        return this.validateEmailToken(token);
      } else {
        return this.navigate();
      }
    } else {
      console.log("came universal");
      return true;
    }
    // return this.navigate();
  }

  async validateEmailToken(token) {
    try {
      // verify token
      const res = await this.http
        .get(EMAIL_VERIFICATION, { token })
        .toPromise();

      if (this._utilityService.getAuthToken()) {
        this._utilityService.setEmailVerifiedToken("true");
      }
      this._utilityService.showAlert("Your email is verified successfully !");
      this._router.navigate([DISCOVER.fullUrl]);

      //route

      // return true;
    } catch (error) {
      console.log("errororoor", error);
      if (error && error instanceof HttpErrorResponse) {
        // this._utilityService.showAlert(error.error.message);
      }
      this._router.navigate(["/link-expired"]);
      return false;
    }
  }
}
