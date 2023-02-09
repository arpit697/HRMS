import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormService } from "src/app/services/form.service";
import { UtilityService } from "src/app/services/utility.service";
import { AccountService } from "../account.service";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  forgotSuccess: boolean = false;
  @Output() back: EventEmitter<any> = new EventEmitter();
  showError: boolean = false;
  errorMessage: string = null;
  newUser: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private accountService: AccountService,
    private utility: UtilityService,
    private dilalogRef: MatDialogRef<ForgotPasswordComponent>,
    private dialog: MatDialog
  ) {
    this.forgotForm = this.createLoginForm();
  }

  ngOnInit(): void {}

  createLoginForm(): FormGroup {
    return this.fb.group({
      email: this.formService.getControl("email"),
    });
  }

  async forgotPassword(): Promise<void> {
    if (this.forgotForm.valid) {
      const payload = { ...this.forgotForm.value };
      try {
        const { data, message } = await this.accountService.forgotPassword(
          payload
        );
        if (data) {
          this.utility.showAlert(message);
          this.forgotSuccess = true;
        }
      } catch (error) {
        if (error.error.statusCode == 411) {
          console.log(error.error.message);
          this.newUser = true;
          this.showErrorMessage("");
        } else {
          this.showErrorMessage(error.error.message);
        }
      }
    }
  }

  showErrorMessage(message: string) {
    this.showError = true;
    this.errorMessage = message;
  }

  close() {
    this.dilalogRef.close();
  }
  openSignup() {
    this.dilalogRef.close();
    this.dialog.open(SignUpComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
