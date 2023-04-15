import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRoutingModule } from './dinner-routing.module';
import { DinnerComponent } from './dinner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
  NgxMaterialTimepickerModule,
];

@NgModule({
  declarations: [
    DinnerComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule ,
    ReactiveFormsModule,
    CKEditorModule,
    ...MATERIAL
  ]
})
export class DinnerModule { }
