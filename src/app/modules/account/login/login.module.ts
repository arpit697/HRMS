import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { CredentialLoginComponent } from './credential-login/credential-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RoutingModule } from 'src/app/pipes/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationCheckModule } from 'src/app/pipes/validation-check/validation-check.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GetClassesAndAttributeDirective } from 'src/app/directives/get-class-attribute/get-classes-and-attribute.directive';
const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    LoginComponent,
    CredentialLoginComponent,
    GoogleLoginComponent,
    GetClassesAndAttributeDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RoutingModule,
    RuButtonModule,
    SocialLoginModule,
    GetControlModule,
    ValidationCheckModule,
    RoutingModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
})
export class LoginModule {}
