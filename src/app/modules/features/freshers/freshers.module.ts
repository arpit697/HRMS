import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshersRoutingModule } from './freshers-routing.module';
import { FreshersComponent } from './freshers.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [FreshersComponent, FeedbackDialogComponent],
  imports: [CommonModule, FreshersRoutingModule, ...MATERIAL],
})
export class FreshersModule {}
