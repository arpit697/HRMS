import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPitchRoutingModule } from './add-pitch-routing.module';
import { AddPitchComponent } from './add-pitch.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from 'ckeditor4-angular';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationCheckModule } from 'src/app/pipes/validation-check/validation-check.module';
import { ReplaceCharModule } from 'src/app/pipes/replace-char/replace-char.module';
import { OptionsFilterModule } from 'src/app/pipes/options-filter/options-filter.module';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [AddPitchComponent],
  imports: [
    CommonModule,
    AddPitchRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    GetControlModule,
    ValidationCheckModule,
    ReplaceCharModule,
    OptionsFilterModule,
    ...MATERIAL,
  ],
})
export class AddPitchModule {}
