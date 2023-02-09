import {
  HttpClient,
  HttpClientModule,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig, ApiResponse } from 'src/app/interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiUrl = '';
  }

  get<T = any>(
    url: string,
    httpParams?: any,
    config?: ApiConfig
  ): Observable<HttpEvent<ApiResponse<T>>> {
    // Use Object.entries to loop over the object and its properties
    for (const [item, value] of Object.entries(httpParams || {})) {
      if (!value) {
        delete httpParams[item];
      }
    }
    const header = this.getCustomHeader(<ApiConfig>config);
    // Add the params to the header only if httpParams is truthy
    if (httpParams) {
      header.params = httpParams;
    }
    return this.http.get<HttpEvent<ApiResponse<T>>>(
      `${this.apiUrl}${url}`,
      header
    );
  }

  getCustomHeader(config: ApiConfig, httpParams?: HttpParams) {
    const headers = { config: JSON.stringify(config || {}) };
    if (config && config.customHeader) {
      Object.assign(headers, config.customHeader);
    }
    return { headers, params: httpParams };
  }
}
