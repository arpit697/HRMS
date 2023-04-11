import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { InterviewsComponent } from './interviews.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [InterviewsComponent],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class InterviewsModule {}
