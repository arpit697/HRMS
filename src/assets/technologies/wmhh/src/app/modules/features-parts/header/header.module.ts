import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LoginModule } from "../../account/login/login.module";
import { SignUpModule } from "../../account/sign-up/sign-up.module";
import { RouterModule } from "@angular/router";
import { AbsoluteRoutingModule } from "src/app/pipes/absolute-routing/absolute-routing.module";
import { HelpUsModule } from "../../common/components/help-us/help-us.module";
import { MatMenuModule } from "@angular/material/menu";
import { AccessibilityClickModule } from "src/app/directives/accessibility-click/accessibility-click.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule,
    RouterModule,
    AbsoluteRoutingModule,
    HelpUsModule,
    MatMenuModule,
    AccessibilityClickModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
