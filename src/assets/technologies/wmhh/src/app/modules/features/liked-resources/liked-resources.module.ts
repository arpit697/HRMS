import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LikedResourcesRoutingModule } from "./liked-resources-routing.module";
import { LikedResourcesComponent } from "./liked-resources.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";

@NgModule({
  declarations: [LikedResourcesComponent],
  imports: [
    CommonModule,
    LikedResourcesRoutingModule,
    InfiniteScrollModule,
    ContentCardModule,
    NoDataModule,
  ],
})
export class LikedResourcesModule {}
