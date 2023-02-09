import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentTypeService } from "../content-type.service";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { LikeModule } from "src/app/modules/common/modules/like/like.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";
import { BookmarkModule } from "src/app/modules/common/modules/bookmark/bookmark.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { CongratulationsPopupModule } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.module";
import { IsAuthenticatedModule } from "src/app/directives/is-authenticated/is-authenticated.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { SocialShareModule } from "src/app/modules/common/modules/social-share/social-share.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { ContentAudioRoutingModule } from "./content-audio-routing.module";
import { ContentAudioComponent } from "./content-audio.component";
import { MatSliderModule } from "@angular/material/slider";
import { AudioModule } from "src/app/modules/common/modules/audio/audio.module";
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
  AudioModule,
  StatusPipeModule,
];
@NgModule({
  declarations: [ContentAudioComponent],
  imports: [
    CommonModule,
    ContentAudioRoutingModule,
    MatSliderModule,
    StrapiModule,
    ...PIPES,
    ...DIRECTIVES,
    ...CUSTOM_MODULES,
  ],
  exports: [ContentAudioComponent],
  providers: [ContentTypeService],
})
export class ContentAudioModule {}
