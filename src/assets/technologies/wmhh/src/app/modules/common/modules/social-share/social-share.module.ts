import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SocialShareComponent } from "./view/social-share.component";
import { SocialShareService } from "./social-share/social-share.service";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [SocialShareComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, ClipboardModule],
  exports: [SocialShareComponent],
  providers: [SocialShareService],
})
export class SocialShareModule {}
