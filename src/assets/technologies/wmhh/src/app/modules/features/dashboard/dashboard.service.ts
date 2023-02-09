import { Injectable } from "@angular/core";
import { ACTIVITYACTION } from "src/app/constant/app-constant";
import {
  COMPLETED_GET,
  CONTENT_LIST_GET_BY_ACTIVITY,
  GET_RECOMMENDED_COURSES,
  INPROGRESS_GET,
  SAVED_GET,
} from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";

@Injectable()
export class DashboardService {
  constructor(private http: HttpService) {}

  /**
   * Will do api hit for fetching list of content based on user actions - saved,liked etc
   * @param action
   */
  getContentListByActivity(action: ACTIVITYACTION): Promise<any> {
    return this.http
      .get(CONTENT_LIST_GET_BY_ACTIVITY(action), {}, { showLoader: true })
      .toPromise();
  }

  getRecommenedActivity(req) {
    return this.http
      .get(GET_RECOMMENDED_COURSES, { ...req }, { showLoader: false })
      .toPromise();
  }

  getCompletedCourses() {
    return this.http.get(COMPLETED_GET, {}, { showLoader: true }).toPromise();
  }

  getSavedCourses() {
    return this.http.get(SAVED_GET, {}, { showLoader: true }).toPromise();
  }

  getInprogressContent(options) {
    return this.http
      .get(INPROGRESS_GET, options, { showLoader: true })
      .toPromise();
  }
}
