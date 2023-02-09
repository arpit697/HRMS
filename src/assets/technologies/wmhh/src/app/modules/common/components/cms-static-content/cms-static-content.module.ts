import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CmsStaticContentComponent } from "./cms-static-content/cms-static-content.component";
import { MatButtonModule } from "@angular/material/button";
import { SafeModule } from "src/app/pipes/safe/safe.module";

const MATERIAL = [MatButtonModule];
const PIPES = [SafeModule];

@NgModule({
  declarations: [CmsStaticContentComponent],
  imports: [CommonModule, ...MATERIAL, ...PIPES],
  exports: [CmsStaticContentComponent],
})
export class CmsStaticContentModule {}
