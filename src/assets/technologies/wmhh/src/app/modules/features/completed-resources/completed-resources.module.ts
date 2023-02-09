import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CompletedResourcesRoutingModule } from "./completed-resources-routing.module";
import { CompletedResourcesComponent } from "./completed-resources.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";

@NgModule({
  declarations: [CompletedResourcesComponent],
  imports: [
    CommonModule,
    CompletedResourcesRoutingModule,
    InfiniteScrollModule,
    ContentCardModule,
    NoDataModule,
  ],
})
export class CompletedResourcesModule {}
