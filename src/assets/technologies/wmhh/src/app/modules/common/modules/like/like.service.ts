import { Injectable } from "@angular/core";
import { IGoogleAnalyticsEvent } from "src/app/constant/interface";
import {
  CONTENT_ACTIVITY_POST,
  LIKE_CONTENT_WITHOUT_AUTH,
} from "src/app/constant/urls";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import { HttpService } from "src/app/services/http.service";

@Injectable()
export class LikeService {
  constructor(private http: HttpService) {}

  /**
   * Will hit api for liking / disliking content
   * @param payload
   */
  likeContent(payload: any): Promise<any> {
    return this.http.post(CONTENT_ACTIVITY_POST, payload).toPromise();
  }

  likeContentWithoutAuth(payload: any): Promise<any> {
    return this.http
      .post(LIKE_CONTENT_WITHOUT_AUTH, { ...payload })
      .toPromise();
  }
}
