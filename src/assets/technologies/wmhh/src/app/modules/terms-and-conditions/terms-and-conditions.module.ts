import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TermsAndConditionsRoutingModule } from "./terms-and-conditions-routing.module";
import { TermsAndConditionsComponent } from "./terms-and-conditions.component";
import { SafeModule } from "src/app/pipes/safe/safe.module";

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [CommonModule, TermsAndConditionsRoutingModule, SafeModule],
})
export class TermsAndConditionsModule {}
