import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { DISCOVER, SEARCH } from "src/app/constant/routes";
import { UtilityService } from "../../services/utility.service";

@Injectable()
export class HomeGuard implements CanActivate, CanLoad {
  constructor(
    private _router: Router,
    private _utilityService: UtilityService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this._utilityService.getAuthToken());

    if (this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();
  }
  navigate() {
    // this._utilityService.clearStorage();
    this._router.navigate([DISCOVER.fullUrl]);
    return false;
  }
}
