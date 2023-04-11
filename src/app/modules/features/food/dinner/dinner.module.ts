import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRoutingModule } from './dinner-routing.module';
import { DinnerComponent } from './dinner.component';


@NgModule({
  declarations: [
    DinnerComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule
  ]
})
export class DinnerModule { }
