import { Injectable } from "@angular/core";
import { CONTENT_ACTIVITY_POST } from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";

@Injectable({
  providedIn: "root",
})
export class BookmarkService {
  constructor(private http: HttpService) {}

  /**
   * Will hit api for Saving / unsaving content
   * @param payload
   */
  saveContent(payload: any): Promise<any> {
    return this.http.post(CONTENT_ACTIVITY_POST, payload).toPromise();
  }
}
