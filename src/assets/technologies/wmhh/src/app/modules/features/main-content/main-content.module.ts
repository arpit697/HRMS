import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainContentRoutingModule } from "./main-content-routing.module";
import { MainContentComponent } from "./main-content.component";
import { MainContentService } from "./main-content.service";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { LikeModule } from "../../common/modules/like/like.module";
import { BookmarkModule } from "../../common/modules/bookmark/bookmark.module";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { NumberToWordsModule } from "src/app/pipes/number-to-words/number-to-words.module";
import { SocialShareModule } from "../../common/modules/social-share/social-share.module";
import { MatDialogModule } from "@angular/material/dialog";
import { LoginModule } from "../../account/login/login.module";
import { RegisterPopupModule } from "../../account/register-popup/register-popup.module";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";

const CUSTOM_MODULES = [
  NoDataModule,
  LikeModule,
  BookmarkModule,
  StopPropagationModule,
  TooltipInfoModule,
  ContentTypeModule,
  SwiperModule,
  SocialShareModule,
  LoginModule,
  RegisterPopupModule,
  StatusPipeModule,
  ContentCardModule,
];

const PIPES = [
  DateModule,
  ContentTypeIconModule,
  StrapiModule,
  NumberToWordsModule,
];
const MATERIAL = [MatDialogModule];
@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    ...CUSTOM_MODULES,
    ...PIPES,
    ...MATERIAL,
  ],
  providers: [MainContentService],
})
export class MainContentModule {}
