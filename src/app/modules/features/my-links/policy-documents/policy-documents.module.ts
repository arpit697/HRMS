import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule]

@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule,
    RuTableModule,
    ...MATERIAL
  ]
})
export class PolicyDocumentsModule { }
