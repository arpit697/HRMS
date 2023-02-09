import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentVideoRoutingModule } from "./content-video-routing.module";
import { ContentTypeService } from "../content-type.service";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { LikeModule } from "src/app/modules/common/modules/like/like.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";
import { BookmarkModule } from "src/app/modules/common/modules/bookmark/bookmark.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { ContentVideoComponent } from "./content-video.component";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { CongratulationsPopupModule } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.module";
import { IsAuthenticatedModule } from "src/app/directives/is-authenticated/is-authenticated.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { SocialShareModule } from "src/app/modules/common/modules/social-share/social-share.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";

const DIRECTIVES = [
  StopPropagationModule,
  IsAuthenticatedModule,
  TooltipInfoModule,
];

const PIPES = [
  DateModule,
  SafeModule,
  ContentTypeModule,
  ContentTypeIconModule,
];

const CUSTOM_MODULES = [
  CongratulationsPopupModule,
  LikeModule,
  BookmarkModule,
  SocialShareModule,
  SwiperModule,
];

@NgModule({
  declarations: [ContentVideoComponent],
  imports: [
    CommonModule,
    ContentVideoRoutingModule,
    StrapiModule,
    ...PIPES,
    ...DIRECTIVES,
    ...CUSTOM_MODULES,
    StatusPipeModule,
  ],
  exports: [ContentVideoComponent],
  providers: [ContentTypeService],
})
export class ContentVideoModule {}
