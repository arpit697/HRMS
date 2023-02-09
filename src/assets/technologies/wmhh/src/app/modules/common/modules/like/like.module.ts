import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LikeComponent } from "./like.component";
import { ShortNumberPipeModule } from "src/app/pipes/short-number-pipe/short-number-pipe.module";
import { LikeService } from "./like.service";
import { MatMenuModule } from "@angular/material/menu";
import { LoginModule } from "src/app/modules/account/login/login.module";
import { DebounceClickModule } from 'src/app/directives/debounce-click/debounce-click.module';



const DIRECTIVES = [DebounceClickModule]

@NgModule({
  declarations: [LikeComponent],
  imports: [CommonModule, ShortNumberPipeModule, MatMenuModule, LoginModule, ...DIRECTIVES],
  providers: [LikeService],
  exports: [LikeComponent],
})
export class LikeModule {}
