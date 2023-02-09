import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterCheckboxSingleComponent } from "./filter-checkbox-single.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AccessibilityClickModule } from "src/app/directives/accessibility-click/accessibility-click.module";

const MATERIAL = [MatCheckboxModule];

@NgModule({
  declarations: [FilterCheckboxSingleComponent],
  imports: [CommonModule, ...MATERIAL, AccessibilityClickModule],
  exports: [FilterCheckboxSingleComponent],
})
export class FilterCheckboxSingleModule {}
