import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from "@angular/router";
import { Observable } from "rxjs";
import { DISCOVER } from "src/app/constant/routes";
import { AccountService } from "src/app/modules/account/account.service";
import { UtilityService } from "src/app/services/utility.service";

@Injectable({
  providedIn: "root",
})
export class ResetPasswordGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private accountService: AccountService,
    private actRoute: ActivatedRoute,
    private utility: UtilityService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.verifyAuthToken(route);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  navigate(): boolean {
    this.utility.showAlert("Link expired");
    this.router.navigate([DISCOVER.fullUrl]);
    return false;
  }

  async verifyAuthToken(route: ActivatedRouteSnapshot): Promise<boolean> {
    try {
      let res = await this.accountService.verifyAuthToken(
        route.params.authToken
      );
      if (res) {
        return true;
      }
    } catch (error) {
      return this.navigate();
    }
  }
}
