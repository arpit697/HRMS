import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SavedResourcesRoutingModule } from "./saved-resources-routing.module";
import { SavedResourcesComponent } from "./saved-resources.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";

@NgModule({
  declarations: [SavedResourcesComponent],
  imports: [
    CommonModule,
    SavedResourcesRoutingModule,
    InfiniteScrollModule,
    ContentCardModule,
    NoDataModule,
  ],
})
export class SavedResourcesModule {}
