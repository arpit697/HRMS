import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutUsRoutingModule } from "./about-us-routing.module";
import { AboutUsComponent } from "./about-us.component";
import { SafeModule } from "src/app/pipes/safe/safe.module";
import { LandingPageService } from "../features/landing-page/landing-page.service";

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, SafeModule],
  providers: [LandingPageService],
})
export class AboutUsModule {}
