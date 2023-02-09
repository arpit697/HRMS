import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TIME_ARRAY } from "src/app/constant/app-constant";
import { DASHBOARD, DISCOVER, SEARCH } from "src/app/constant/routes";
import { IPopupData } from "src/app/models/popup";
import { FileUploadService } from "src/app/services/file-upload.service";
import { FormService } from "src/app/services/form.service";
import { StrapiService } from "src/app/services/strapi.service";
import { UtilityService } from "src/app/services/utility.service";
import { AccountService } from "../../account/account.service";
import { DeleteAccountPopupComponent } from "./delete-account-popup/delete-account-popup.component";
import { OtpVerificationComponent } from "./otp-verification/otp-verification.component";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.scss"],
})
export class CreateProfileComponent implements OnInit, OnDestroy {
  goals: Array<any> = [];
  sectors: Array<any> = [];
  timeArray: Array<any> = [...TIME_ARRAY];
  imgUrl: any = null;
  imgFile: File = null;
  preferencesForm: FormGroup;
  userProfile: any = null;
  sub: Subscription = new Subscription();
  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private formService: FormService,
    private utility: UtilityService,
    private router: Router,
    private dialog: MatDialog,
    private fileUploadService: FileUploadService
  ) {
    this.getGoalsAndSectors();
    this.preferencesForm = this.createPreferencesForm();
    this.getUserProfile(true);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.utility.$title.next(null);
  }

  getUserProfile(refresh: boolean = false): void {
    this.utility.getProfileDetail(refresh).then((data) => {
      console.log(data);
      this.userProfile = data;
      this.preferencesForm.patchValue(this.userProfile);
      this.preferencesForm.get("goals").patchValue(this.userProfile.goals);
      this.preferencesForm.get("sectors").patchValue(this.userProfile.sectors);
      if (
        this.userProfile.profilePictureData &&
        this.userProfile.profilePictureData[0]
      )
        this.imgUrl = this.userProfile.profilePictureData[0].url;
    });
  }

  /**
   * Will create a formgroup instance for preferences
   * @returns form group instance
   */
  createPreferencesForm(): FormGroup {
    return this.fb.group({
      email: this.formService.getControl("email"),
      firstName: this.formService.getControl("name", false),
      lastName: this.formService.getControl("name", false),
      phoneNumber: this.formService.getControl("phone", false),
      goals: this.formService.getControl("dropdown", false),
      sectors: this.formService.getControl("dropdown", false),
      // timeavailibility: this.formService.getControl("dropdown"),
      // profilePicture: this.formService.getControl("dropdown", false, ""),
    });
  }

  /**
   * Will fetch goals and sectors from strapi
   */
  async getGoalsAndSectors(): Promise<void> {
    try {
      const res = await Promise.all([
        this.accountService.getGoalsListing(),
        this.accountService.getSectorsListing(),
      ]);

      const { data: goals } = res[0];
      this.goals = [...goals];
      const { data: sectors } = res[1];
      this.sectors = [...sectors];
      // console.log(this.goals, this.sectors);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Will restrict the user from entering more than 10 digits as mobile number
   * @param event
   */
  handleKeyDown(event) {
    const inputValue: string = event.target.value;
    if (event.key == "Backspace") {
      return;
    }
    if (inputValue.length >= 10) {
      event.preventDefault();
      return;
    }
  }

  /**
   * Will read the select file on profile picture section
   * @param files
   */
  preview(files) {
    if (files.length === 0) return;
    //new comment111
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      this.utility.showAlert("Only images are supported");
      return;
    }
    this.imgFile = files[0];
    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
    console.log(this.imgFile);
  }

  /**
   * Will handle save preferences button click
   */
  async savePreferences(): Promise<void> {
    if (this.preferencesForm.invalid) {
      return;
    }
    //new picture
    if (this.imgFile) {
      console.log("new image");
      let { Location } = await this.fileUploadService.uploadFile(this.imgFile);
      console.log(Location);
      this.imgFile = null;
      if (this.preferencesForm.valid) {
        let payload = {
          ...this.preferencesForm.value,
          profilePicture: Location,
        };

        if (payload.phoneNumber == "") {
          delete payload.phoneNumber;
        }
        //already was an image earlier
        if (
          this.userProfile.profilePicture &&
          this.userProfile.profilePictureData
        ) {
          payload.oldProfilePictureId = this.userProfile.profilePicture;
        }
        // payload.sectors = [payload.sectors];
        // payload.goals = [payload.goals];
        delete payload.email;
        let res = await this.accountService.savePreferences(payload);
        if (res) {
          this.utility.showAlert(res.message);
          this.getUserProfile(true);
          this.router.navigate([DASHBOARD.fullUrl]);

          // this.router.navigate([DISCOVER.fullUrl]);
        }
      }
    }
    //old picture or no image
    else {
      console.log("old or no im,age");

      if (this.preferencesForm.valid) {
        let payload = { ...this.preferencesForm.value };

        if (payload.phoneNumber == "") {
          delete payload.phoneNumber;
        }
        if (
          this.userProfile.profilePicture &&
          this.userProfile.profilePictureData
        ) {
          payload.profilePicture = this.userProfile.profilePictureData[0].url;
        }

        // payload.sectors = [payload.sectors];
        // payload.goals = [payload.goals];
        delete payload.email;
        let res = await this.accountService.savePreferences(payload);
        if (res) {
          this.utility.showAlert(res.message);
          this.getUserProfile(true);
          this.router.navigate([DASHBOARD.fullUrl]);

          // this.router.navigate([DISCOVER.fullUrl]);
        }
      }
    }
  }

  async verifyNumber() {
    console.log(this.userProfile);

    if (this.userProfile.phoneNumber) {
      try {
        let { data } = await this.accountService.sendOtp();

        if (data) {
          const dialogRef = this.dialog.open(OtpVerificationComponent, {
            width: "560px",
            autoFocus: false,
            disableClose: true,
            data: data,
          });
          this.utility.showAlert("OTP sent successfully");
          this.sub.add(
            dialogRef.afterClosed().subscribe((success) => {
              if (success) {
                this.getUserProfile(true);
              }
            })
          );
        }
      } catch (error) {}
    } else {
      this.utility.showAlert("Please save  phone number to continue");
    }
  }

  deleteAccount() {
    const dialogRef = this.dialog.open(DeleteAccountPopupComponent, {
      width: "582px",
      autoFocus: false,
      restoreFocus: false,
    });
    this.sub.add(
      dialogRef.afterClosed().subscribe(async (success) => {
        if (success) {
          let { message } = await this.accountService.deleteAccount();
          this.utility.clearStorage();
          this.utility.showAlert(message);
          // this.router.navigate([DISCOVER.fullUrl]);
          location.reload();
        }
      })
    );
  }
}
