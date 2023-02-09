import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipPopupComponent } from './tooltip-popup/tooltip-popup.component';
import { SafeModule } from 'src/app/pipes/safe/safe.module';
import { ContentTypeIconModule } from 'src/app/pipes/content-type-icon/content-type-icon.module';
import { ContentTypeModule } from 'src/app/pipes/content-type/content-type.module';



const PIPES  = [SafeModule, ContentTypeIconModule, ContentTypeModule]

@NgModule({
  declarations: [TooltipPopupComponent],
  imports: [
    CommonModule,
    ...PIPES
  ],
  exports:[TooltipPopupComponent]
})
export class TooltipPopupModule { }
