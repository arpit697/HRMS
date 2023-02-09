import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { SECTORS_GET, GET_PAGE_CONTENT } from "src/app/constant/urls";
import { STATIC_CONTENT_CMS } from "src/app/constant/enums";

@Injectable()
export class LandingPageService {
  constructor(private httpService: HttpService) {}

  getSectorsList() {
    return this.httpService
      .get(SECTORS_GET, {}, { showLoader: false })
      .toPromise();
  }

  getAboutUsContent() {
    const request = {
      pageSlug: STATIC_CONTENT_CMS.ABOUT_US,
    };
    return this.httpService
      .get(GET_PAGE_CONTENT, { ...request }, { showLoader: false })
      .toPromise();
  }

  getIntroductionContent() {
    const request = {
      pageSlug: STATIC_CONTENT_CMS.HOME_PAGE,
    };

    return this.httpService
      .get(GET_PAGE_CONTENT, { ...request }, { showLoader: false })
      .toPromise();
  }
}
