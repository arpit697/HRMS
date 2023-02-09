import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioComponent } from "./audio.component";
import { MatSliderModule } from "@angular/material/slider";
import { AudioService } from "./audio.service";

@NgModule({
  declarations: [AudioComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [AudioComponent],
  providers: [],
})
export class AudioModule {}
