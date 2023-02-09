import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { SERIES_CONTENT, GET_ARTICLE_BY_TAGS } from "src/app/constant/urls";

@Injectable()
export class MainContentService {
  constructor(private http: HttpService) {}

  /**
   * Will do api hit for fetching series content
   * @returns promise as result
   */
  getSeriesContent(id: string, pageOptions: any): Promise<any> {
    return this.http
      .get(SERIES_CONTENT(id), pageOptions, { showLoader: true })
      .toPromise();
  }

  getParentRelatedArticles(req) {
    return this.http
      .get(GET_ARTICLE_BY_TAGS, { ...req }, { showLoader: false })
      .toPromise();
  }
}
