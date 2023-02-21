import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';
import { MatDividerModule } from '@angular/material/divider';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationCheckModule } from 'src/app/pipes/validation-check/validation-check.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatButtonModule
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    RuButtonModule,
    GetControlModule,
    ValidationCheckModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
})
export class ForgotPasswordModule {}
