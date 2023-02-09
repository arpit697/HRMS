import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseIntroductionRoutingModule } from "./course-introduction-routing.module";
import { CourseIntroductionComponent } from "./course-introduction.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { LikeModule } from "../../common/modules/like/like.module";
import { BookmarkModule } from "../../common/modules/bookmark/bookmark.module";
import { MainContentService } from "../main-content/main-content.service";
import { MatDialogModule } from "@angular/material/dialog";
import { SwiperModule } from "ngx-swiper-wrapper";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { DateModule } from "src/app/pipes/date/date.module";
import { NumberToWordsModule } from "src/app/pipes/number-to-words/number-to-words.module";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { LoginModule } from "../../account/login/login.module";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";
import { SocialShareModule } from "../../common/modules/social-share/social-share.module";
import { RegisterPopupModule } from "../../account/register-popup/register-popup.module";

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
  declarations: [CourseIntroductionComponent],
  imports: [
    CommonModule,
    CourseIntroductionRoutingModule,
    MatExpansionModule,

    ...CUSTOM_MODULES,
    ...PIPES,
    ...MATERIAL,
  ],
  providers: [MainContentService],
})
export class CourseIntroductionModule {}
