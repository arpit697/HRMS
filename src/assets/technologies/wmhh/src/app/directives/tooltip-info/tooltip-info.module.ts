import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipInfoDirective } from './tooltip-info.directive';
import { DateModule } from 'src/app/pipes/date/date.module';
import { ContentTypeModule } from 'src/app/pipes/content-type/content-type.module';
import { SafeModule } from 'src/app/pipes/safe/safe.module';
import { TooltipPopupModule } from 'src/app/modules/common/components/tooltip-popup/tooltip-popup.module';



@NgModule({
  declarations: [TooltipInfoDirective],
  imports: [
    CommonModule,
    DateModule,
    ContentTypeModule,
    SafeModule,
    TooltipPopupModule
  ],
  exports:[TooltipInfoDirective]
})
export class TooltipInfoModule { }
