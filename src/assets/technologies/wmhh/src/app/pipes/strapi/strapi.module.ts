import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StrapiPipe } from "./strapi.pipe";

@NgModule({
  declarations: [StrapiPipe],
  imports: [CommonModule],
  exports: [StrapiPipe],
})
export class StrapiModule {}
