import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentQuizRoutingModule } from "./content-quiz-routing.module";
import { ContentQuizComponent } from "./content-quiz.component";
import { ContentTypeService } from "../content-type.service";
import { MatRadioModule } from "@angular/material/radio";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { GetControlModule } from "src/app/pipes/get-control/get-control.module";
import { LikeModule } from "src/app/modules/common/modules/like/like.module";
import { BookmarkModule } from "src/app/modules/common/modules/bookmark/bookmark.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";
import { RegisterPopupModule } from "src/app/modules/account/register-popup/register-popup.module";
import { CongratulationsPopupModule } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.module";
import { StrapiModule } from "src/app/pipes/strapi/strapi.module";
import { SocialShareModule } from "src/app/modules/common/modules/social-share/social-share.module";

const MATERIAL = [MatRadioModule];

const PIPES = [GetControlModule, SafeModule];

const CUSTOM_MODULES = [
  LikeModule,
  BookmarkModule,
  RegisterPopupModule,
  CongratulationsPopupModule,
  StrapiModule,
  SocialShareModule,
];

@NgModule({
  declarations: [ContentQuizComponent],
  imports: [
    CommonModule,
    ContentQuizRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL,
    ...PIPES,
    ...CUSTOM_MODULES,
  ],
  providers: [ContentTypeService],
})
export class ContentQuizModule {}
