import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MatCardModule } from '@angular/material/card';
import { RuButtonModule } from '../common/modules/ru-button/ru-button.module';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from 'src/app/pipes/routing/routing.module';
import { CredentialLoginComponent } from './login/credential-login/credential-login.component';
import { GoogleLoginComponent } from './login/google-login/google-login.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

const MATERIAL = [MatCardModule , MatDividerModule];

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RuButtonModule,
    
    ReactiveFormsModule,
    RoutingModule,
    ...MATERIAL,
  ],
})
export class AccountModule {}
