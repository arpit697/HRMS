import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';
import { RuJobCardModule } from 'src/app/modules/common/modules/ru-job-card/ru-job-card.module';
import { MatCardModule } from '@angular/material/card';
import { ReferCandidateDialogComponent } from './refer-candidate-dialog/refer-candidate-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
];
@NgModule({
  declarations: [JobOpeningsComponent, ReferCandidateDialogComponent],
  imports: [
    CommonModule,
    JobOpeningsRoutingModule,
    RuJobCardModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
})
export class JobOpeningsModule {}
