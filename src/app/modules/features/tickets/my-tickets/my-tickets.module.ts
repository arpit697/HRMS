import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketsRoutingModule } from './my-tickets-routing.module';
import { MyTicketsComponent } from './my-tickets.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { RemoveRecordDialogComponent } from '../../includes/utilities/popups/remove-ticket/remove-record-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL = [
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
];
@NgModule({
  declarations: [MyTicketsComponent, RemoveRecordDialogComponent],
  imports: [
    CommonModule,
    MyTicketsRoutingModule,
    CKEditorModule,
    FormsModule,
    RuTableModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
})
export class MyTicketsModule {}
