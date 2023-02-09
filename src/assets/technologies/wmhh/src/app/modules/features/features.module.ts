import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { FeaturesComponent } from "./features.component";
import { HeaderModule } from "../features-parts/header/header.module";
import { FooterModule } from "../features-parts/footer/footer.module";


@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, HeaderModule, FooterModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
