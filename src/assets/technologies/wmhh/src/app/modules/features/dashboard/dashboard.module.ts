import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from "./dashboard.service";
import { MatTabsModule } from "@angular/material/tabs";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { AbsoluteRoutingModule } from "src/app/pipes/absolute-routing/absolute-routing.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";
import { LikeModule } from "../../common/modules/like/like.module";
import { BookmarkModule } from "../../common/modules/bookmark/bookmark.module";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";

const DIRECTIVES = [StopPropagationModule];
const CUSTOM_MODULES = [LikeModule, BookmarkModule, NoDataModule];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    ContentCardModule,
    AbsoluteRoutingModule,
    SwiperModule,
    StrapiModule,
    ...CUSTOM_MODULES,
    ...DIRECTIVES,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
