import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDeletionRoutingModule } from './data-deletion-routing.module';
import { DataDeletionComponent } from './data-deletion.component';


@NgModule({
  declarations: [DataDeletionComponent],
  imports: [
    CommonModule,
    DataDeletionRoutingModule
  ]
})
export class DataDeletionModule { }
