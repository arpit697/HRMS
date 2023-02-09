import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterCheckboxComponent } from "./filter-checkbox.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AccessibilityClickModule } from "src/app/directives/accessibility-click/accessibility-click.module";

const MATERIAL = [MatCheckboxModule];

@NgModule({
  declarations: [FilterCheckboxComponent],
  imports: [CommonModule, AccessibilityClickModule, ...MATERIAL],
  exports: [FilterCheckboxComponent],
})
export class FilterCheckboxModule {}
