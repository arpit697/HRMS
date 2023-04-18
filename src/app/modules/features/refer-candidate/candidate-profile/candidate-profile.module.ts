import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateProfileRoutingModule } from './candidate-profile-routing.module';
import { CandidateProfileComponent } from './candidate-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL = [MatCardModule,MatDividerModule];

@NgModule({
  declarations: [
    CandidateProfileComponent
  ],
  imports: [
    CommonModule,
    CandidateProfileRoutingModule,
    ...MATERIAL
  ]
})
export class CandidateProfileModule { }
