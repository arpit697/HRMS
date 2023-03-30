import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(public _snack: MatSnackBar, public http: HttpClient) { }

  /**@description returns the current year */
  get newYear() {
    return new Date().getFullYear();
  }

  // async getIpAddress() {
  //   let ipAddress;
  //   try {
  //     const res: any = await this.http
  //       .get('https://api.ipify.org?format=json')
  //       .toPromise();
  //     ipAddress = res.ip;
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return ipAddress;
  // }

  splitArray(arr: any) {
    const splitIndex = Math.ceil(arr.length / 2);
    const firstPart = arr.slice(0, splitIndex);
    const secondPart = arr.slice(splitIndex);
    return [firstPart, secondPart];
  }

  getFirstLetter(text: any) {
    return text.charAt(0);
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

  readURL(event: any, allowedTypes: string[]): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        // Check if file type is allowed
        if (!allowedTypes.includes(file.type)) {
          reject(new Error(`Invalid file type. Only ${allowedTypes.join(', ')} files are allowed.`));
        }
        const reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);
        reader.readAsDataURL(file);
      } else {
        reject(new Error('No file selected.'));
      }
    });
  }
  

  bar(message: any, action: string, theme: string) {
    this._snack.open(message, action, {
      duration: 2000,
      panelClass: [theme],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
