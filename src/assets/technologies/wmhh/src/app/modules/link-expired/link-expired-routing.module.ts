import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LinkExpiredComponent } from "./link-expired.component";

const routes: Routes = [{ path: "", component: LinkExpiredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class LinkExpiredRoutingModule {}
