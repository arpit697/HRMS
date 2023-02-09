import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentCardComponent } from "./content-card.component";
import { ShortNumberPipeModule } from "src/app/pipes/short-number-pipe/short-number-pipe.module";
import { LikeModule } from "../like/like.module";
import { BookmarkModule } from "../bookmark/bookmark.module";
import { ContentTypeModule } from "src/app/pipes/content-type/content-type.module";
import { MatIconModule } from "@angular/material/icon";
import { StopPropagationModule } from "src/app/directives/stop-propagation/stop-propagation.module";
import { ContentTypeIconModule } from "src/app/pipes/content-type-icon/content-type-icon.module";
import { TooltipInfoModule } from "src/app/directives/tooltip-info/tooltip-info.module";
import { AccessibilityClickModule } from "src/app/directives/accessibility-click/accessibility-click.module";
import { StatusPipeModule } from "src/app/pipes/status-pipe/status-pipe.module";

const DIRECTIVES = [StopPropagationModule, TooltipInfoModule];

@NgModule({
  declarations: [ContentCardComponent],
  imports: [
    CommonModule,
    ShortNumberPipeModule,
    LikeModule,
    BookmarkModule,
    ContentTypeModule,
    ContentTypeIconModule,
    MatIconModule,
    AccessibilityClickModule,
    ...DIRECTIVES,
    StatusPipeModule,
  ],
  exports: [ContentCardComponent],
})
export class ContentCardModule {}
