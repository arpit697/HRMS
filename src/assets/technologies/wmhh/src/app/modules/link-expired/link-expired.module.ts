import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinkExpiredRoutingModule } from "./link-expired-routing.module";
import { LinkExpiredComponent } from "./link-expired.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [LinkExpiredComponent],
  imports: [CommonModule, LinkExpiredRoutingModule, MatButtonModule],
})
export class LinkExpiredModule {}
