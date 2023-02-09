import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateProfileRoutingModule } from "./create-profile-routing.module";
import { CreateProfileComponent } from "./create-profile.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { NumberOnlyModule } from "src/app/directives/number-only/number-only.module";
import { ValidationErrorPipeModule } from "src/app/pipes/validation-error/validation-error-pipe.module";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { OtpVerificationComponent } from "./otp-verification/otp-verification.component";
import { MatIconModule } from "@angular/material/icon";
import { OtpBoxModule } from "./otp-verification/otp-box/otp-box.module";
import { DeleteAccountPopupComponent } from './delete-account-popup/delete-account-popup.component';
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [CreateProfileComponent, OtpVerificationComponent, DeleteAccountPopupComponent],
  imports: [
    CommonModule,
    CreateProfileRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NumberOnlyModule,
    ValidationErrorPipeModule,
    GetControlModule,
    MatIconModule,
    OtpBoxModule,
    MatDialogModule
  ],
})
export class CreateProfileModule {}
