import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentTypePipe } from "./content-type.pipe";

@NgModule({
  declarations: [ContentTypePipe],
  imports: [CommonModule],
  exports: [ContentTypePipe],
  providers:[ContentTypePipe]
})
export class ContentTypeModule {}
