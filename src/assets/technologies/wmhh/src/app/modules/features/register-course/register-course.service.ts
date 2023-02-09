import { Injectable } from "@angular/core";
import {
  COURSE_REGISTERATION,
  COURSE_REGISTERATION_POST,
} from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";

@Injectable()
export class RegisterCourseService {
  constructor(private http: HttpService) {}

  getDynamicQuestions(slug: string) {
    return this.http
      .get(COURSE_REGISTERATION(slug), {}, { showLoader: true })
      .toPromise();
  }

  register(payload: any) {
    return this.http
      .post(COURSE_REGISTERATION_POST, payload, { showLoader: true })
      .toPromise();
  }
}
