import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatExpansionModule } from '@angular/material/expansion';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [MyDsrComponent],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    RuTableModule,
    EditorModule,
    ...MATERIAL,
  ],
})
export class MyDsrModule {}
