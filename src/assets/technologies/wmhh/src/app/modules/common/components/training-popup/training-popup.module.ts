import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPopupComponent } from './training-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';



const PIPES = [GetControlModule, ValidationErrorPipeModule
]


@NgModule({
  declarations: [TrainingPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    ...PIPES
  ],
  exports : [TrainingPopupComponent],
  entryComponents:[TrainingPopupComponent]
})
export class TrainingPopupModule { }
