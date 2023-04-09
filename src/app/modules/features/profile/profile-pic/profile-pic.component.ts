import { Component } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss'],
})
export class ProfilePicComponent {
  current_profile: any;
  constructor(public utility: UtilityService) {}
  getUserImage(event: any): void {
    this.utility
      .readURL(event, [
        'image/apng',
        'image/bmp',
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/svg+xml',
        'image/tiff',
        'image/webp',
        'image/jpeg',
        'image/avif',
      ])
      .then((result: any) => {
        this.utility.uploadedProfilePicture = result;
        this.current_profile = result;
        this.utility.bar('Uploaded Successfully', '', 'green-snackbar');
      })
      .catch((error) => {
        this.utility.bar(
          'The attachment must be a file of type: png, jpg, jpeg, gif',
          '',
          'red-snackbar'
        );
        console.error(error);
      });
  }

  // allowedTypes = [
  //   'image/apng',
  //   'image/bmp',
  //   'image/gif',
  //   'image/jpeg',
  //   'image/png',
  //   'image/svg+xml',
  //   'image/tiff',
  //   'image/webp',
  //   'application/msword',
  //   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //   'application/vnd.ms-excel',
  //   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //   'application/pdf',
  //   'application/rtf',
  //   'text/plain',
  // ];

  submitHandler() {
    const newProfilePicture = this.utility.uploadedProfilePicture;

    if (newProfilePicture) {
      const message =
        this.current_profile === newProfilePicture
          ? 'Profile Already Uploaded'
          : 'Profile Picture Updated Successfully';

      const snackbarClass =
        this.current_profile === newProfilePicture
          ? 'red-snackbar'
          : 'green-snackbar';

      this.utility.bar(message, '', snackbarClass);
    } else {
      this.utility.bar('Please Select New Profile First', '', 'red-snackbar');
    }
  }
}
