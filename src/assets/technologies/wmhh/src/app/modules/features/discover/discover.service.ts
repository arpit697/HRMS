import { Injectable } from "@angular/core";
import {
  DISCOVER_LIST,
  GET_FILTER,
  SAVE_FILTER_POST,
  SERIES_CONTENT_LIST,
} from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { Observable } from "rxjs";

@Injectable()
export class DiscoverService {
  searchText: string = null;
  constructor(private http: HttpService) {}

  /**
   * Will do api hit for fetching parent content list
   * @returns promise as result
   */
  getSeriesContent(pageOptions: any): Promise<any> {
    return this.http
      .get(SERIES_CONTENT_LIST, pageOptions, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for fetching discover content list
   * @returns promise as result
   */
  getDiscoverListing(pageOptions: any): Promise<any> {
    return this.http
      .get(DISCOVER_LIST, pageOptions, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for fetching discover content list
   * @returns promise as result
   */
  fetchDiscoverListing(pageOptions: any): Observable<any> {
    return this.http.get(DISCOVER_LIST, pageOptions, { showLoader: true });
  }

  /**
   * Will do api hit for saving user filter
   * @returns promise as result
   */
  saveUserFilter(payload: any): Promise<any> {
    return this.http.post(SAVE_FILTER_POST, payload).toPromise();
  }

  getUserFilter(): Promise<any> {
    return this.http.get(GET_FILTER).toPromise();
  }
}
