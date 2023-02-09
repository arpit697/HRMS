import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResetPasswordRoutingModule } from "./reset-password-routing.module";
import { ResetPasswordComponent } from "./reset-password.component";
import { ResetPasswordPopupComponent } from "./reset-password-popup/reset-password-popup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { ValidationErrorPipeModule } from "src/app/pipes/validation-error/validation-error-pipe.module";

@NgModule({
  declarations: [ResetPasswordComponent, ResetPasswordPopupComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    GetControlModule,
    MatIconModule,
  ],
})
export class ResetPasswordModule {}
