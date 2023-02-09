import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookmarkComponent } from "./bookmark.component";
import { DebounceClickModule } from "src/app/directives/debounce-click/debounce-click.module";
import { RegisterPopupModule } from "src/app/modules/account/register-popup/register-popup.module";

@NgModule({
  declarations: [BookmarkComponent],
  imports: [CommonModule, DebounceClickModule, RegisterPopupModule],
  exports: [BookmarkComponent],
})
export class BookmarkModule {}
