import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessibilityClickDirective } from "./accessibility-click.directive";

@NgModule({
  declarations: [AccessibilityClickDirective],
  imports: [CommonModule],
  exports: [AccessibilityClickDirective],
})
export class AccessibilityClickModule {}
