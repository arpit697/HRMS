import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrivacyPolicyRoutingModule } from "./privacy-policy-routing.module";
import { PrivacyPolicyComponent } from "./privacy-policy.component";
import { SafeModule } from "src/app/pipes/safe/safe.module";

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, PrivacyPolicyRoutingModule, SafeModule],
})
export class PrivacyPolicyModule {}
