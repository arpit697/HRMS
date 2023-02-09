import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongratulationsPopupComponent } from './congratulations-popup.component';



@NgModule({
  declarations: [CongratulationsPopupComponent],
  imports: [
    CommonModule
  ],
  exports: [CongratulationsPopupComponent]
})
export class CongratulationsPopupModule { }
