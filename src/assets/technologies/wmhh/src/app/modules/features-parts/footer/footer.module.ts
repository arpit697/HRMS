import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";
import { AbsoluteRoutingModule } from "src/app/pipes/absolute-routing/absolute-routing.module";
import { CmsStaticContentModule } from "../../common/components/cms-static-content/cms-static-content.module";
import { SafeModule } from "src/app/pipes/safe/safe.module";

const PIPES = [AbsoluteRoutingModule];

const CUSTOM_MODULES = [CmsStaticContentModule, SafeModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, ...PIPES, ...CUSTOM_MODULES],
  exports: [FooterComponent],
})
export class FooterModule {}
