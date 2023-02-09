import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignUpRoutingModule } from "./sign-up-routing.module";
import { SignUpComponent } from "./sign-up.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ValidationErrorPipeModule } from "src/app/pipes/validation-error/validation-error-pipe.module";
import { ReactiveFormsModule } from "@angular/forms";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    // SignUpRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    GetControlModule,
    MatIconModule,
  ],
  exports: [SignUpComponent],
})
export class SignUpModule {}
