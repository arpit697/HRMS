import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IPopupData, IPopupResponse } from "../models/popup";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { Router, ActivatedRoute } from "@angular/router";
import { ConfirmationModalComponent } from "../modules/common/components/confirmation-modal/confirmation-modal.component";
import { HttpService } from "./http.service";
import { PROFILE_GET } from "../constant/urls";
import { COURSE_INTRODUCTION, MAIN_CONTENT } from "../constant/routes";

import {
  MODULENAMES,
  CONTENT_TYPE,
  YOUTUBE_VIDEO_URLS,
  YOUTUBE_VIMEO_REGEX,
} from "../constant/app-constant";
import { CookieService } from "ngx-cookie-service";
import { ThankYouComponent } from "../modules/common/components/thank-you/thank-you.component";
import { LocalstorageService } from "./LocalStorage.service";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  profileData: any = null;
  profileDetail = new BehaviorSubject<any>(null);
  $title: Subject<any> = new Subject();
  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object // private localStorage: LocalstorageService
  ) {}

  clearStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }

  setNotFound() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("not-found", "true");
    }
  }

  removeNotFound() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("not-found");
    }
  }

  getNotFound() {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem("not-found");
    }
  }

  getAuthToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(environment.tokenKey);
    }
  }

  setToken(token) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(environment.tokenKey, token);
    }
  }

  getEmailVerifiedToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(environment.mailVerifiedKey);
    }
  }

  setEmailVerifiedToken(isVerified) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.setItem(environment.mailVerifiedKey, isVerified);
    }
  }

  showAlert(message, error = false, duration = 3000) {
    this._snackBar.open(message, "Close", {
      duration,
      panelClass: error ? "error-toast" : "",
    });
  }

  async getProfileDetail(refresh = false) {
    const token = this.getAuthToken();
    if (!token) {
      return null;
    }
    try {
      if (this.profileData && !refresh) {
        return this.profileData;
      }
      const response = await this.http.get(PROFILE_GET).toPromise();
      this.profileData = response.data;
      this.setEmailVerifiedToken(this.profileData.emailVerified);
      this.profileDetail.next({ ...this.profileData });
      return { ...this.profileData };
    } catch (error) {
      console.log("erororororr======", error);
      return Promise.reject(error);
    }
  }

  /**
   * Formats data
   * @param data data to be formated
   * @returns  formated data
   */
  formatData(data) {
    for (let item in data) {
      if (data[item] instanceof Date) {
        data[item] = data[item].toISOString();
      }
      if (Array.isArray(data[item])) {
        data[item] = data[item].join();
      }
    }
    // data.fromDate = new Date(data.fromDate).toISOString();
    // data.toDate = new Date(data.toDate).toISOString();
    return data;
  }

  // getGuestToken() {
  //   return localStorage.getItem(environment.guestKey);
  // }

  // setGuestToken(uuid) {
  //   localStorage.setItem(environment.guestKey, uuid);
  // }

  openDialog(data: IPopupData): Observable<IPopupResponse> {
    const dialogRef = this._dialog.open(ConfirmationModalComponent, {
      width: "500px",
      data,
      disableClose: true,
    });

    return dialogRef.afterClosed();
  }

  openThankYou(data): Observable<IPopupResponse> {
    const dialogRef = this._dialog.open(ThankYouComponent, {
      width: "500px",
      data: data,
      disableClose: true,
    });
    return dialogRef.afterClosed();
  }

  goToDetails(item: any, parentData?) {
    console.log(item);

    if (item.externallink && item.externallink.length) {
      window.open(item.externallink, "_blank");
      return;
    }
    if (item.markedasCourse) {
      this.router.navigate([COURSE_INTRODUCTION.fullUrl, item.slug]);
      return;
    }

    if (MODULENAMES.SERIESCATEGORIES == item.moduleName) {
      this.router.navigate([MAIN_CONTENT.fullUrl, item.slug]);
      return;
    }

    if (MODULENAMES.SERIESCONTENT == item.moduleName) {
      this.routeToSubPart(item, parentData);
      return;
    }
  }

  routeToSubPart(part: any, parentData) {
    if (parentData && parentData.completeInSequence) {
      if (part.isReadable) {
        console.log(part);

        switch (part.contenttype) {
          case CONTENT_TYPE.image:
            this.router.navigate(["/resource/article", part.slug]);
            break;

          case CONTENT_TYPE.audio:
            this.router.navigate(["/resource/audio", part.slug]);
            break;

          case CONTENT_TYPE.video:
            this.router.navigate(["/resource/video", part.slug]);

            break;

          case CONTENT_TYPE.question:
            this.router.navigate(["/resource/quiz", part.slug]);

            break;

          default:
            break;
        }
      } else {
      }
    } else {
      switch (part.contenttype) {
        case CONTENT_TYPE.image:
          this.router.navigate(["/resource/article", part.slug]);
          break;

        case CONTENT_TYPE.audio:
          this.router.navigate(["/resource/audio", part.slug]);
          break;

        case CONTENT_TYPE.video:
          this.router.navigate(["/resource/video", part.slug]);
          break;

        case CONTENT_TYPE.question:
          this.router.navigate(["/resource/quiz", part.slug]);
          break;

        case CONTENT_TYPE.standAlonePage:
          this.router.navigate(["/resource/article", part.slug]);
          break;

        default:
          break;
      }
    }
  }

  checkLikedListContent(list) {
    if (this.cookieService.check(environment.LIKE_RESOURCES)) {
      const getAllLikesList: string[] = JSON.parse(
        this.cookieService.get(environment.LIKE_RESOURCES)
      );
      const mappedList = list.map((item) => {
        if (getAllLikesList.includes(item.moduleId)) {
          return { ...item, isLiked: 1 };
        } else {
          return { ...item };
        }
      });

      return [...mappedList];
    } else {
      return [...list];
    }
  }

  checkLikedContent(module) {
    if (this.cookieService.check(environment.LIKE_RESOURCES)) {
      const getAllLikesList: string[] = JSON.parse(
        this.cookieService.get(environment.LIKE_RESOURCES)
      );
      if (getAllLikesList.includes(module.moduleId)) {
        return { ...module, isLiked: 1 };
      } else {
        return { ...module };
      }
    } else {
      return { ...module };
    }
  }

  getResourceCookiesList() {
    if (this.cookieService.check(environment.LIKE_RESOURCES)) {
      const getAllLikesList: string[] = JSON.parse(
        this.cookieService.get(environment.LIKE_RESOURCES)
      );
      return [...getAllLikesList];
    } else {
      return [];
    }
  }

  updateCookiesLike(resourceId, isAdd = true) {
    if (this.cookieService.check(environment.LIKE_RESOURCES)) {
      const getAllLikesList: string[] = JSON.parse(
        this.cookieService.get(environment.LIKE_RESOURCES)
      );
      if (isAdd) {
        getAllLikesList.push(resourceId);
        this.cookieService.set(
          environment.LIKE_RESOURCES,
          JSON.stringify(getAllLikesList),
          { expires: 365, sameSite: "Lax", path: "/" }
        );
      } else if (!isAdd) {
        const resourceIndex = getAllLikesList.findIndex(
          (item) => item === resourceId
        );
        if (resourceIndex >= 0) {
          getAllLikesList.splice(resourceIndex, 1);
        }
        this.cookieService.set(
          environment.LIKE_RESOURCES,
          JSON.stringify(getAllLikesList),
          { expires: 365, sameSite: "Lax", path: "/" }
        );
      }
    } else {
      this.cookieService.set(
        environment.LIKE_RESOURCES,
        JSON.stringify([resourceId]),
        { expires: 365, sameSite: "Lax", path: "/" }
      );
    }
  }

  getEmbeddedVideoId(url, formats) {
    if (url.match(YOUTUBE_VIMEO_REGEX)) {
      let ismatch = url.match(YOUTUBE_VIMEO_REGEX);
      return ismatch[7];
    } else {
      return false;
    }
  }

  replaceEmbedWithIframe(str) {
    return new Promise((accept, reject) => {
      let htmlString = document.createElement("div");
      htmlString.innerHTML = str;
      let embeddedElem = htmlString.getElementsByTagName("oembed");

      let possibleVideos = ["youtube", "vimeo", "youtu"];

      if (embeddedElem.length) {
        for (let i = 0; i < embeddedElem.length; i++) {
          const matchedFormat = possibleVideos.find((format) => {
            const regex = new RegExp(format);
            return embeddedElem[i].getAttribute("url").match(regex);
          });

          if (matchedFormat) {
            let url, id, tempObject, elemObject;

            switch (matchedFormat) {
              case "youtube":
              case "youtu":
                url = embeddedElem[i].getAttribute("url");
                id = this.getEmbeddedVideoId(url, YOUTUBE_VIDEO_URLS);
                tempObject = document.createElement("div");
                tempObject.innerHTML =
                  '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;margin:8px;">' +
                  `<iframe src="https://www.youtube.com/embed/${id}" ` +
                  'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                  'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                  "</iframe>" +
                  "</div>";
                elemObject = embeddedElem[i].parentNode;
                elemObject.appendChild(tempObject);

                break;
              case "vimeo":
                url = embeddedElem[i].getAttribute("url");
                id = this.getEmbeddedVideoId(url, YOUTUBE_VIDEO_URLS);
                tempObject = document.createElement("div");
                tempObject.innerHTML =
                  '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;margin:8px;">' +
                  `<iframe src="https://player.vimeo.com/video/${id}" ` +
                  'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                  'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
                  "</iframe>" +
                  "</div>";
                elemObject = embeddedElem[i].parentNode;
                elemObject.appendChild(tempObject);
                break;
              default:
            }
          }
        }
        accept(htmlString.innerHTML);
      } else {
        accept(str);
      }
    });
  }

  getUserAgentBrowser() {
    var test = function (regexp) {
      return regexp.test(window.navigator.userAgent);
    };
    switch (true) {
      case test(/edg/i):
        return "Microsoft Edge";
      case test(/trident/i):
        return "Microsoft Internet Explorer";
      case test(/firefox|fxios/i):
        return "Mozilla Firefox";
      case test(/opr\//i):
        return "Opera";
      case test(/ucbrowser/i):
        return "UC Browser";
      case test(/samsungbrowser/i):
        return "Samsung Browser";
      case test(/chrome|chromium|crios/i):
        return "Google Chrome";
      case test(/safari/i):
        return "Apple Safari";
      default:
        return "Other";
    }
  }
}
