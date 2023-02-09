import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { environment } from "../../environments/environment";
import { AccountService } from "../modules/account/account.service";
import { UtilityService } from "../services/utility.service";

@Injectable({
  providedIn: "root",
})
export class UserResolverService implements Resolve<Promise<any>> {
  constructor(private _userProfileService: UtilityService) {}

  async resolve() {
    try {
      if (!this._userProfileService.getAuthToken()) {
        return null;
      }
      return this._userProfileService.getProfileDetail();
    } catch (error) {
      return null;
    }
  }
}
