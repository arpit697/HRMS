import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';


@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule
  ]
})
export class PolicyDocumentsModule { }
