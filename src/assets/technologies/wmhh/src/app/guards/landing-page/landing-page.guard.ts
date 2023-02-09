import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { DASHBOARD } from "src/app/constant/routes";
import { UtilityService } from "src/app/services/utility.service";

@Injectable({
  providedIn: "root",
})
export class LandingPageGuard implements CanActivate {
  constructor(private utility: UtilityService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.utility.getAuthToken()) {
      console.log("came");

      return this.navigate();
    } else {
      return true;
    }
  }
  navigate(): boolean {
    this.router.navigate([DASHBOARD.fullUrl]);
    return false;
  }
}
