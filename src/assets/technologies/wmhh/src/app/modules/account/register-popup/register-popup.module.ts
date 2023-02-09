import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterPopupComponent } from "./register-popup.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [RegisterPopupComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [RegisterPopupComponent],
})
export class RegisterPopupModule {}
