import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreprenurshipRoutingModule } from './entreprenurship-routing.module';
import { EntreprenurshipComponent } from './entreprenurship.component';


@NgModule({
  declarations: [
    EntreprenurshipComponent
  ],
  imports: [
    CommonModule,
    EntreprenurshipRoutingModule
  ]
})
export class EntreprenurshipModule { }
