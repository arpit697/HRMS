import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from './decimal.pipe';



@NgModule({
  declarations: [DecimalPipe],
  imports: [
    CommonModule
  ],
  exports:[DecimalPipe]
})
export class DecimalModule { }
