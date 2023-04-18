import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsFilterPipe } from './options-filter.pipe';

@NgModule({
  declarations: [OptionsFilterPipe],
  imports: [CommonModule],
  exports: [OptionsFilterPipe],
})
export class OptionsFilterModule {}
