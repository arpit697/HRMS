import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';


@NgModule({
  declarations: [
    DsrComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule
  ]
})
export class DsrModule { }
