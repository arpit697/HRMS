import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscoverRoutingModule } from "./discover-routing.module";
import { DiscoverComponent } from "./discover.component";
import { DiscoverService } from "./discover.service";
import { MatRadioModule } from "@angular/material/radio";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { BookmarkModule } from "../../common/modules/bookmark/bookmark.module";
import { ContentCardModule } from "../../common/modules/content-card/content-card.module";
import { LikeModule } from "../../common/modules/like/like.module";
import { FooterModule } from "../../features-parts/footer/footer.module";
import { HeaderModule } from "../../features-parts/header/header.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { NoDataModule } from "../../common/modules/no-data/no-data.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FilterCheckboxModule } from "../../common/modules/filter-checkbox/filter-checkbox.module";
import { SearchBarModule } from "../../common/modules/search-bar/search-bar.module";
import { FilterCheckboxSingleModule } from "../../common/modules/filter-checkbox-single/filter-checkbox-single.module";
import { InfiniteScrollerModule } from "src/app/directives/infinite-scroller/infinite-scroller.module";
import { AccessibilityClickModule } from "src/app/directives/accessibility-click/accessibility-click.module";

const CUSTOM_MODULES = [
  FilterCheckboxModule,
  LikeModule,
  BookmarkModule,
  HeaderModule,
  FooterModule,
  SearchBarModule,
  FilterCheckboxSingleModule,
  InfiniteScrollerModule,
  AccessibilityClickModule,
];

@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    InfiniteScrollModule,
    ContentCardModule,
    MatRadioModule,
    ReactiveFormsModule,
    NoDataModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ...CUSTOM_MODULES,
  ],
  providers: [DiscoverService, CookieService],
})
export class DiscoverModule {}
