import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

import { SearchService } from "./search.service";

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule],
  providers: [SearchService],
})
export class SearchModule {}
