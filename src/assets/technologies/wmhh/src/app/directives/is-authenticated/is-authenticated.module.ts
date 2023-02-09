import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthenticatedDirective } from './is-authenticated.directive';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { LoginModule } from 'src/app/modules/account/login/login.module';



@NgModule({
  declarations: [IsAuthenticatedDirective],
  imports: [
    CommonModule,
    AbsoluteRoutingModule,
  ],
  exports:[IsAuthenticatedDirective]
})
export class IsAuthenticatedModule { }
