import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DISCOVER } from "src/app/constant/routes";
import { AccountService } from "src/app/modules/account/account.service";
import { SignUpComponent } from "src/app/modules/account/sign-up/sign-up.component";
import { FormService } from "src/app/services/form.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-reset-password-popup",
  templateUrl: "./reset-password-popup.component.html",
  styleUrls: ["./reset-password-popup.component.scss"],
})
export class ResetPasswordPopupComponent implements OnInit {
  signupForm: FormGroup;
  signupWithEmail: boolean = false;
  hasEightCharacters: boolean = false;
  hasSpecial: boolean = false;
  hasLowerAndUpper: boolean = false;
  hasNumber: boolean = false;
  showPasswordCharacterstics: boolean = false;
  hideConfirmPassword: boolean = true;
  hidePassword: boolean = true;
  @Input() token: string;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private accountService: AccountService,
    private utility: UtilityService,
    // public dialogRef: MatDialogRef<ResetPasswordPopupComponent>,
    private router: Router
  ) // @Inject(MAT_DIALOG_DATA) public dialogData: any
  {
    this.signupForm = this.createSignupForm();
  }

  ngOnInit(): void {}

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        password: this.formService.getControl("createPassword"),
        confirmPassword: this.formService.getControl("emptyControl"),
      },
      {
        validator: this.formService.matchPassword,
      }
    );
  }

  checkPassword(event: any) {
    let enteredPassword: string = event.target.value;
    var specialChar = new RegExp("(?=.*[@$!%*?&])");
    var oneNumber = new RegExp(".*[0-9].*");
    var lowerAndUpperChar = new RegExp("(?=.*[a-z])(?=.*[A-Z])");

    this.hasSpecial = specialChar.test(enteredPassword);
    this.hasNumber = oneNumber.test(enteredPassword);
    this.hasLowerAndUpper = lowerAndUpperChar.test(enteredPassword);
    this.hasEightCharacters = enteredPassword.length >= 8;
  }

  cancel() {
    // this.dialogRef.close();
    this.router.navigate([DISCOVER.fullUrl]);
  }

  async resetPassword() {
    if (this.signupForm.valid) {
      const payload = {
        token: this.token,
        ...this.signupForm.value,
      };
      delete payload.confirmPassword;
      try {
        let { message } = await this.accountService.resetPassword(payload);
        this.utility.showAlert(message);
        // this.dialogRef.close();
        this.router.navigate([DISCOVER.fullUrl]);
      } catch (error) {}
    }
  }
}
