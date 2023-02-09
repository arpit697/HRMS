import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterCourseRoutingModule } from "./register-course-routing.module";
import { RegisterCourseComponent } from "./register-course.component";
import { RegisterCoursePopupComponent } from "./register-course-popup/register-course-popup.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { ValidationErrorPipeModule } from "src/app/pipes/validation-error/validation-error-pipe.module";
import { MatSelectModule } from "@angular/material/select";
import { NumberOnlyModule } from "src/app/directives/number-only/number-only.module";
import { RegisterCourseService } from "./register-course.service";
import { RegisterCourseSuccessPopupComponent } from './register-course-success-popup/register-course-success-popup.component';

const PIPES = [GetControlModule, ValidationErrorPipeModule];
@NgModule({
  declarations: [RegisterCourseComponent, RegisterCoursePopupComponent, RegisterCourseSuccessPopupComponent],
  imports: [
    CommonModule,
    RegisterCourseRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    NumberOnlyModule,
    ...PIPES,
  ],
  providers: [RegisterCourseService],
})
export class RegisterCourseModule {}
