import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = '';
  }

  post(url:any, data:any, queryParams?:any, config?: any): any {
    const header = <any>this.getCustomHeader(config);

    // Add query parameters to the URL if queryParams is provided
    if (queryParams) {
      let params = new HttpParams();
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params = params.set(key, queryParams[key]);
        }
      }
      header['params'] = params;
    }

    return this.http.post(this.apiUrl + url, data, header);
  }

  put(url:any, data:any, queryParams?:any, config?: any): any {
    const header = this.getCustomHeader(config);

    // Add query parameters to the URL if queryParams is provided
    if (queryParams) {
      let params = new HttpParams();
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params = params.set(key, queryParams[key]);
        }
      }
      url += '?' + params.toString(); // Append the query parameters to the URL
    }

    return this.http.put(this.apiUrl + url, data, header);
  }

  patch(url:any, data:any, config?: any): any {
    return this.http.patch(
      this.apiUrl + url,
      data,
      this.getCustomHeader(config)
    );
  }

  delete(url:any, data?:any, config?: any): any {
    return this.http.delete(
      this.apiUrl + url,
      this.getCustomHeader(config, data)
    );
  }

  deleteWithQuery(url:any, httpParams?: any, config?: any): any {
    for (let item in httpParams) {
      if (
        httpParams[item] === '' ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
      }
    }
    const header = <any>this.getCustomHeader(config);
    if (httpParams) {
      header['params'] = httpParams;
    }
    return this.http.delete(this.apiUrl + url, header);
  }

  get(url:any, httpParams?: any, config?: any): any {
    for (let item in httpParams) {
      if (
        httpParams[item] === '' ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
        // delete httpParams["Match"];
      }
    }
    const header = <any>this.getCustomHeader(config);
    if (httpParams) {
      header['params'] = httpParams;
    }
    return this.http.get(this.apiUrl + url, header);
  }

  getCustomHeader(config?:any, data?:any) {
    if (config && config.customHeader) {
      return {
        headers: {
          config: JSON.stringify(config || {}),
          ...config.customHeader,
        },
      };
    }
    return {
      headers: {
        config: JSON.stringify(config || {}),
      },
    };
  }

  deleteWithBody(url:any, body?: any, config?: any): any {
    for (let item in body) {
      if (
        body[item] === '' ||
        body[item] === undefined ||
        body[item] === null
      ) {
        delete body[item];
      }
    }
    const header = <any>this.getCustomHeader(config);
    if (body) {
      header['body'] = body;
    }
    return this.http.delete(this.apiUrl + url, header);
  }
}
