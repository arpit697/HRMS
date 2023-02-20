import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(public _snack: MatSnackBar, public http: HttpClient) {}

  /**@description returns the current year */
  get newYear() {
    return new Date().getFullYear();
  }

  async getIpAddress() {
    let ipAddress;
    try {
      const res: any = await this.http
        .get('https://api.ipify.org?format=json')
        .toPromise();
      ipAddress = res.ip;
    } catch (error) {
      console.error(error);
    }
    return ipAddress;
  }

  uploadedProfilePicture: any = '';
  // get ipAddress() {
  //   let ipAddress;
  //   this.http.get('https://api.ipify.org?format=json').subscribe((res: any) => {
  //     console.log(res);

  //     ipAddress = res;
  //   });

  //   return ipAddress;
  // }

  bar(message: any, action: string, theme: string) {
    this._snack.open(message, action, {
      duration: 2000,
      panelClass: [theme],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
