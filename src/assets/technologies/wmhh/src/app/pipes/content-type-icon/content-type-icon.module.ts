import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTypeIconPipe } from './content-type-icon.pipe';



@NgModule({
  declarations: [ContentTypeIconPipe],
  imports: [
    CommonModule
  ],
  exports:[ContentTypeIconPipe]
})
export class ContentTypeIconModule { }
