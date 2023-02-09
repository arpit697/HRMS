import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShimmerComponent } from "./shimmer.component";

@NgModule({
  declarations: [ShimmerComponent],
  imports: [CommonModule],
  exports: [ShimmerComponent],
})
export class ShimmerModule {}
