import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpUsComponent } from "./help-us.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxStarRatingModule } from "ngx-star-rating";
import { CheckMaxLengthModule } from "src/app/directives/check-max-length/check-max-length.module";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { ValidationErrorPipeModule } from "src/app/pipes/validation-error/validation-error-pipe.module";

const DIRECTIVES = [CheckMaxLengthModule];

const PIPES = [GetControlModule, ValidationErrorPipeModule];

@NgModule({
  declarations: [HelpUsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxStarRatingModule,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [HelpUsComponent],
})
export class HelpUsModule {}
