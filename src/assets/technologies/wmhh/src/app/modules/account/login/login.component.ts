import { Injector } from "@angular/core";
import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SOCIAL_TYPE } from "src/app/constant/enums";
import { DASHBOARD } from "src/app/constant/routes";
import { FormService } from "src/app/services/form.service";
import { LoaderService } from "src/app/services/loader.service";
import { MagicService } from "src/app/services/magic.service";
import { UtilityService } from "src/app/services/utility.service";
import { AccountService } from "../account.service";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  signinWithEmai: boolean = false;
  loginForm: FormGroup;
  hidePassword: boolean = true;
  showForgotPassword: boolean = false;
  private dialogRef = null;
  private dialogData;
  magicLink: boolean = false;
  newUser: boolean = false;
  magicForm: FormGroup;
  showError: boolean = false;
  errorMessage: string = null;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private accountService: AccountService,
    private utility: UtilityService,
    private router: Router,
    private injector: Injector, // public dialogRef: MatDialogRef<LoginComponent>, // @Inject(MAT_DIALOG_DATA) public dialogData: any
    private magicService: MagicService,
    private loaderService: LoaderService,
    private dialog: MatDialog
  ) {
    this.dialogRef = this.injector.get(MatDialogRef, null);
    this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);
    this.loginForm = this.createLoginForm();
    this.magicForm = this.createMagicForm();
  }

  ngOnInit(): void {}

  createMagicForm() {
    return this.fb.group({
      email: this.formService.getControl("email"),
    });
  }

  
  createLoginForm(): FormGroup {
    return this.fb.group({
      email: this.formService.getControl("email"),
      password: this.formService.getControl("password"),
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      try {
        const payload = { ...this.loginForm.value };

        let data = await this.accountService.login(payload);
        // console.log(data.data);

        this.accountService.afterLoginSuccess(data.data);
        this.utility.showAlert("Login Successfull");
        this.dialogRef.close();
        this.utility.profileDetail.next(data.data);
        // location.reload();
        this.router.navigate([DASHBOARD.fullUrl]);
      } catch (error) {
        if (error.error.statusCode == 411) {
          console.log(error.error.message);
          this.newUser = true;
          this.showErrorMessage("");
        } else {
          this.newUser = false;
          this.showErrorMessage(error.error.message);
        }
        // this.utility.showAlert(error.error.message, true);
      }
    }
  }

  showErrorMessage(message: string) {
    this.showError = true;
    this.errorMessage = message;
  }

  forgotPassword() {
    this.showForgotPassword = true;
  }

  openSignup() {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }

  async loginWithGoogle() {
    await this.magicService.loginWithGoogle();
  }

  async loginWithFacebook() {
    await this.magicService.loginWithFacebook();
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
        this.utility.profileDetail.next(res.data);

        this.router.navigate([DASHBOARD.fullUrl]);
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
}
