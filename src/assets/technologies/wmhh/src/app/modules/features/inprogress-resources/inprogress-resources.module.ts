import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InprogressResourcesRoutingModule } from "./inprogress-resources-routing.module";
import { InprogressResourcesComponent } from "./inprogress-resources.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";

@NgModule({
  declarations: [InprogressResourcesComponent],
  imports: [
    CommonModule,
    InprogressResourcesRoutingModule,
    InfiniteScrollModule,
    ContentCardModule,
    NoDataModule,
  ],
})
export class InprogressResourcesModule {}
