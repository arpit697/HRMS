import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeavesRoutingModule } from './my-leaves-routing.module';
import { MyLeavesComponent } from './my-leaves.component';


@NgModule({
  declarations: [
    MyLeavesComponent
  ],
  imports: [
    CommonModule,
    MyLeavesRoutingModule
  ]
})
export class MyLeavesModule { }
