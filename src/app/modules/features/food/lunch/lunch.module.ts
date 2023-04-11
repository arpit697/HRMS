import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';


@NgModule({
  declarations: [
    LunchComponent
  ],
  imports: [
    CommonModule,
    LunchRoutingModule
  ]
})
export class LunchModule { }
