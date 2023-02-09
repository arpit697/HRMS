import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationCheckPipe } from './validation-check.pipe';

@NgModule({
  declarations: [ValidationCheckPipe],
  imports: [CommonModule],
  exports: [ValidationCheckPipe],
})
export class ValidationCheckModule {}
