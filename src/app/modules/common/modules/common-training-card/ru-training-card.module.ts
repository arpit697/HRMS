import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTrainingCardComponent } from './ru-training-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
];

@NgModule({
  declarations: [RuTrainingCardComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [RuTrainingCardComponent],
})
export class RuTrainingCardModule {}
