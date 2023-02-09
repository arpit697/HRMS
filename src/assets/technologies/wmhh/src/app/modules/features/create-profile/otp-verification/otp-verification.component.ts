import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AccountService } from "src/app/modules/account/account.service";
import { UtilityService } from "src/app/services/utility.service";
import { OtpBoxComponent } from "./otp-box/otp-box.component";

@Component({
  selector: "app-otp-verification",
  templateUrl: "./otp-verification.component.html",
  styleUrls: ["./otp-verification.component.scss"],
})
export class OtpVerificationComponent implements OnInit {
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "50px",
      height: "50px",
    },
  };

  otp: any;
  otpVerified: boolean = false;
  @ViewChild(OtpBoxComponent) otpBox: OtpBoxComponent;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<OtpVerificationComponent>,
    private accountService: AccountService,
    private utility: UtilityService
  ) {}

  ngOnInit(): void {}

  /**
   * Will handle otp change event and get the latest otp
   * @param event (otp)
   */
  onOtpChange(event) {
    console.log("OTP Event", event);

    this.otp = event;
    console.log(this.otp);
  }

  /**
   * Will close the dialog
   */
  close() {
    this.dialogRef.close(this.otpVerified);
  }

  /**
   * Will handle continue button to verify otp
   */
  async verifyOtp() {
    const payload = {
      otp: this.otp,
      otpTimeStamp: this.dialogData.otpTimeStamp,
    };
    try {
      let { data } = await this.accountService.verifyOtp(payload);
      if (data) {
        this.otpVerified = true;
        this.otpBox.resetOtp();
      }
    } catch (error) {}
  }

  /**
   * Will handle resend otp button click
   */
  async resendOtp() {
    try {
      let { data, message } = await this.accountService.sendOtp();
      this.dialogData = data;
      this.otpBox.resetOtp();
      this.utility.showAlert("OTP resent successfully");
    } catch (error) {}
  }
}
