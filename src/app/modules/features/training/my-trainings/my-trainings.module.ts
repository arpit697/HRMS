import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RequestTrainingDialogComponent } from '../../includes/utilities/popups/request-training-dialog/request-training-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
];

@NgModule({
  declarations: [MyTrainingsComponent, RequestTrainingDialogComponent],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
})
export class MyTrainingsModule {}
