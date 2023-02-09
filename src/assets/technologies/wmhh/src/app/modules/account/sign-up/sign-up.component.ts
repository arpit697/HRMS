import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SIGNUPSOURCE } from "src/app/constant/app-constant";
import { SOCIAL_TYPE } from "src/app/constant/enums";
import { DASHBOARD } from "src/app/constant/routes";
import { FormService } from "src/app/services/form.service";
import { LoaderService } from "src/app/services/loader.service";
import { MagicService } from "src/app/services/magic.service";
import { UtilityService } from "src/app/services/utility.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  signupWithEmail: boolean = false;
  hasEightCharacters: boolean = false;
  hasSpecial: boolean = false;
  hasLowerAndUpper: boolean = false;
  hasNumber: boolean = false;
  showPasswordCharacterstics: boolean = false;
  hideConfirmPassword: boolean = true;
  hidePassword: boolean = true;
  sectors: Array<any> = [];
  magicForm: FormGroup;
  magicLink: boolean = false;
  showError: boolean = false;
  errorMessage: string = null;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private accountService: AccountService,
    private utility: UtilityService,
    public dialogRef: MatDialogRef<SignUpComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private magicService: MagicService,
    private loaderService: LoaderService
  ) {
    this.getSectorsList();
    this.signupForm = this.createSignupForm();
    this.magicForm = this.createMagicForm();
  }

  ngOnInit(): void {}

  async getSectorsList(): Promise<void> {
    let { data } = await this.accountService.getSectorsListing();
    this.sectors = [...data];
  }

  createMagicForm() {
    return this.fb.group({
      email: this.formService.getControl("email"),
    });
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: this.formService.getControl("email"),
        password: this.formService.getControl("createPassword"),
        confirmPassword: this.formService.getControl("emptyControl"),
        sectors: this.formService.getControl("dropdown"),
        termsAndConditions: this.formService.getControl(
          "emptyControl",
          true,
          true
        ),
      },
      {
        validator: this.formService.matchPassword,
      }
    );
  }

  checkPassword(event: any) {
    let enteredPassword: string = event.target.value;
    let specialChar = new RegExp("(?=.*[@$!%*?&])");
    let oneNumber = new RegExp(".*[0-9].*");
    let lowerAndUpperChar = new RegExp("(?=.*[a-z])(?=.*[A-Z])");

    this.hasSpecial = specialChar.test(enteredPassword);
    this.hasNumber = oneNumber.test(enteredPassword);
    this.hasLowerAndUpper = lowerAndUpperChar.test(enteredPassword);
    this.hasEightCharacters = enteredPassword.length >= 8;
  }

  async onSignup() {
    if (this.signupForm.valid) {
      if (this.signupForm.get("termsAndConditions").value) {
        const payload = {
          ...this.signupForm.value,
          signupSource: SIGNUPSOURCE.normal,
        };
        payload.sectors = [payload.sectors];
        delete payload.termsAndConditions;
        delete payload.confirmPassword;
        try {
          let data = await this.accountService.signup(payload);
          // console.log(data);
          this.utility.openDialog;
          if (data) {
            this.signupForm.reset();
            this.utility.showAlert(data.message);
            this.dialogRef.close();
            this.accountService.afterLoginSuccess(data.data);
            this.utility.profileDetail.next(data.data)
            this.router.navigate([DASHBOARD.fullUrl]);
          }
        } catch (error) {
          this.showErrorMessage(error.error.message);
          // this.utility.showAlert(error.error.message, true);
        }
      } else {
        // this.utility.showAlert(
        //  ,
        //   true
        // );
        this.showErrorMessage(
          "Please agree to terms of conditions and privacy policy to continue"
        );
      }
    }
  }

  async loginWithGoogle() {
    if (!this.signupForm.get("termsAndConditions").value) {
      this.showErrorMessage(
        "Please agree to terms of conditions and privacy policy to continue"
      );

      return;
    }
    await this.magicService.loginWithGoogle();
  }

  async loginWithFacebook() {
    if (!this.signupForm.get("termsAndConditions").value) {
      this.showErrorMessage(
        "Please agree to terms of conditions and privacy policy to continue"
      );

      return;
    }
    await this.magicService.loginWithFacebook();
  }

  checkTnc() {
    if (!this.signupForm.get("termsAndConditions").value) {
      this.showErrorMessage(
        "Please agree to terms of conditions and privacy policy to continue"
      );

      return;
    }

    this.magicLink = !this.magicLink;
  }
  async loginWithMagicLink() {
    if (!this.magicForm.valid) {
      return;
    }
    this.loaderService.loader.next(true);
    try {
      let { email } = this.magicForm.value;
      const res = await this.magicService.loginWithMagicLink(email);
      console.log(res);
      const payload = {
        email: email,
        signupSource: SOCIAL_TYPE.magic,
      };
      try {
        let res = await this.accountService.socialLogin(payload);
        console.log(res);
        this.accountService.afterLoginSuccess(res.data);
        this.router.navigate(["/"]);
        this.loaderService.loader.next(false);
        this.dialogRef.close();
      } catch (error) {
        this.loaderService.loader.next(false);
      }
    } catch (e) {
      this.loaderService.loader.next(false);

      console.log(e);
    }
  }

  close() {
    this.dialogRef.close();
  }

  showErrorMessage(message: string) {
    this.showError = true;
    this.errorMessage = message;
  }
}
