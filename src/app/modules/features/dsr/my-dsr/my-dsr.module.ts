import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

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
];

@NgModule({
  declarations: [MyDsrComponent],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    RuTableModule,
    CKEditorModule,
    RuTableModule,
    FormsModule,
    ...MATERIAL,
  ],
})
export class MyDsrModule { }
