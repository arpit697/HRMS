import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentImageRoutingModule } from "./content-image-routing.module";
import { ContentImageComponent } from "./content-image.component";
import { ContentTypeService } from "../content-type.service";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { LikeModule } from "src/app/modules/common/modules/like/like.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";
import { IsAuthenticatedModule } from "src/app/directives/is-authenticated/is-authenticated.module";
import { BookmarkModule } from "src/app/modules/common/modules/bookmark/bookmark.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { MatDialogModule } from "@angular/material/dialog";
import { CongratulationsPopupModule } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { SocialShareModule } from "src/app/modules/common/modules/social-share/social-share.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { NumberToWordsModule } from "src/app/pipes/number-to-words/number-to-words.module";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";

const PIPES = [
  StrapiModule,
  SafeModule,
  DateModule,
  ContentTypeModule,
  NumberToWordsModule,
];

const DIRECTIVES = [
  IsAuthenticatedModule,
  TooltipInfoModule,
  ContentTypeIconModule,
];

const CUSTOM_MODULES = [
  LikeModule,
  ContentImageRoutingModule,
  CongratulationsPopupModule,
  SocialShareModule,
];

@NgModule({
  declarations: [ContentImageComponent],
  imports: [
    CommonModule,
    ...PIPES,
    ...CUSTOM_MODULES,
    BookmarkModule,
    LikeModule,
    MatDialogModule,
    SwiperModule,
    StatusPipeModule,
    ...DIRECTIVES,
  ],
  providers: [ContentTypeService],
})
export class ContentImageModule {}
