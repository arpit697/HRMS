import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';

const MATERIAL = []

@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule , 
    RuTableModule
  ]
})
export class PolicyDocumentsModule { }
