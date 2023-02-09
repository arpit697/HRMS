import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectorInfoComponent } from "./sector-info.component";
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { AbsoluteRoutingModule } from "src/app/pipes/absolute-routing/absolute-routing.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { LikeModule } from "../../common/modules/like/like.module";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { TooltipPopupModule } from "../../common/components/tooltip-popup/tooltip-popup.module";
import { TrainingPopupModule } from "../../common/components/training-popup/training-popup.module";
import { ThankYouModule } from "../../common/components/thank-you/thank-you.module";
import { BookmarkModule } from "../../common/modules/bookmark/bookmark.module";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";

const routes: Routes = [{ path: "", component: SectorInfoComponent }];

const MATERIAL = [MatIconModule];

const PIPES = [
  AbsoluteRoutingModule,
  DateModule,
  ContentTypeModule,
  ContentTypeIconModule,
  StrapiModule,
  ContentCardModule,
  StatusPipeModule,
  SafeModule,
];

const CUSTOM_MODULES = [
  NoDataModule,
  TooltipPopupModule,
  LikeModule,
  BookmarkModule,
  StopPropagationModule,
];

const DIRECTIVES = [TooltipInfoModule];

@NgModule({
  declarations: [SectorInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TrainingPopupModule,
    ThankYouModule,
    LikeModule,
    ...MATERIAL,
    ...PIPES,
    ...CUSTOM_MODULES,
    ...DIRECTIVES,
  ],
})
export class SectorInfoModule {}
