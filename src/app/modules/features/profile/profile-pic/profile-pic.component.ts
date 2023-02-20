import { Component } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss'],
})
export class ProfilePicComponent {

  constructor(public utility: UtilityService) {}
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) =>
        (this.utility.uploadedProfilePicture = reader.result);

      reader.readAsDataURL(file);
    }
  }

  submitHandler() {
    if (!(this.utility.uploadedProfilePicture == '')) {
      this.utility.bar(
        'profile picture updated successfully',
        '',
        'green-snackbar'
      );
    } else {
      this.utility.bar('please select new profile first', '', 'red-snackbar');
    }
  }
}
