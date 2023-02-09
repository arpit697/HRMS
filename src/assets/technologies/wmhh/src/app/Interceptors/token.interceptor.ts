import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { UtilityService } from "../services/utility.service";
import { LoaderService } from "../services/loader.service";
import { ApiConfig } from "../models/api.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private _utilityService: UtilityService,
    private _loaderService: LoaderService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = {};
    const token = this._utilityService.getAuthToken();
    // const firebaseToken = this._utilityService.getFirebaseToken();
    let config: ApiConfig;
    config = JSON.parse(request.headers.get("config"));

    if (token) {
      headers["authorization"] = "Bearer " + token;
    }

    headers["api_key"] = environment.API_KEY;

    if (!navigator.onLine) {
      const error = new HttpErrorResponse({
        error: {
          httpCode: 510,
          statusCode: 510,
          // message: TranslateService.data.NO_INTERNET,
        },
      });
      if (!config.skipErrorPopup) {
        // this._utilityService.errorAlert(error);
      }
      return throwError(error);
    }

    if (config && config.showLoader) {
      this._loaderService.loader.next(true);
    }
    request.headers.delete("config");
    request.headers.delete("skipHeaders");
    request = request.clone({
      setHeaders: headers,
    });

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            if (config && config.showLoader) {
              this._loaderService.loader.next(false);
            }
          }
        },
        (err: any) => {
          if (config && config.showLoader) {
            this._loaderService.loader.next(false);
          }
          if (err instanceof HttpErrorResponse) {
            if (config && !config.skipErrorPopup) {
              // this._utilityService.showAlert(err.error.message);
            }
            if (
              err.status === 401 ||
              err.status === 440 ||
              err.status === 403
            ) {
              this._utilityService.clearStorage();
              this.router.navigate(["/"]);
            }

            if (err.status === 400 || err.status === 500) {
              // this.router.navigate(["/page-not-found"]);
            }
          }
        }
      )
    );
  }
}
