import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';
import { RuJobCardModule } from 'src/app/modules/common/modules/common-job-card/ru-job-card.module';
import { MatCardModule } from '@angular/material/card';
import { ReferCandidateDialogComponent } from './refer-candidate-dialog/refer-candidate-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationCheckModule } from 'src/app/pipes/validation-check/validation-check.module';
import { ReplaceCharModule } from 'src/app/pipes/replace-char/replace-char.module';
import { OptionsFilterModule } from 'src/app/pipes/options-filter/options-filter.module';

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
    GetControlModule,
    ValidationCheckModule,
    ReplaceCharModule,
    OptionsFilterModule,
    ...MATERIAL,
  ],
})
export class JobOpeningsModule { }
