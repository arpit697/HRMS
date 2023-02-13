import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferCandidateRoutingModule } from './refer-candidate-routing.module';
import { ReferCandidateComponent } from './refer-candidate.component';


@NgModule({
  declarations: [
    ReferCandidateComponent
  ],
  imports: [
    CommonModule,
    ReferCandidateRoutingModule
  ]
})
export class ReferCandidateModule { }
