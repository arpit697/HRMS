import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import axios, { AxiosPromise } from "axios";

@Injectable({
  providedIn: "root",
})
export class StrapiService {
  private strapiUrl: string;
  constructor(private http: HttpClient) {
    this.strapiUrl = environment.STRAPI_BASE_PATH;
  }

  /**
   * @description common service method for get requests for Strapi
   * @param url strapi url to hit
   * @returns Result as an Observalble
   */
  get(url: string): AxiosPromise<any> {
    return axios.get(this.strapiUrl + url);
  }
}
