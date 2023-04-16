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

  readURL(
    event: any,
    allowedTypes: string[]
  ): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        // Check if file type is allowed
        if (!allowedTypes.includes(file.type)) {
          reject(
            new Error(
              `Invalid file type. Only ${allowedTypes.join(
                ', '
              )} files are allowed.`
            )
          );
        }
        const reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);
        reader.readAsDataURL(file);
      } else {
        reject(new Error('No file selected.'));
      }
    });
  }

  formCheck(form: any) {
    for (const field of Object.keys(form.controls)) {
      const control = form.controls[field];
      if (control.invalid) {
        if (control.errors.required) {
          return this.formatErrorMessage(field, 'is required');
        } else {
          return this.formatErrorMessage(field, 'is not valid');
        }
      }
    }
    return null;
  }

  formatErrorMessage(field: string, message: string) {
    // Replace underscores with spaces
    const fieldName = field.replace(/_/g, ' ');

    // Convert to title case
    const titleCaseFieldName = fieldName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    return `${titleCaseFieldName} ${message}`;
  }

  downloadHandler(element: any) {
    const fileUrl = element.file_url;
    const fileName = `${element.name}`;
    const link = document.createElement('a');
    link.setAttribute('href', fileUrl);
    link.setAttribute('download', fileName);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  bar(message: any, action: string, theme: string) {
    this._snack.open(message, action, {
      duration: 2000,
      panelClass: [theme],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  getCurrentDate() {
    const date: Date = new Date();
    const month: number = date.getMonth() + 1; // add 1 to get the correct month index (0-11)
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    return `${year} - ${month} - ${day}`;
  }

  generateRandomNumber(): number {
    const randomNumber: number = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  }

  findIndexByPropertyValue(arr: any, property: any, value: any) {
    return arr.findIndex((obj: any) => obj[property] === value);
  }
}
