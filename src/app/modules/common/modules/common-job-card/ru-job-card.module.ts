import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuJobCardComponent } from './ru-job-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RuButtonModule } from '../common-button/ru-button.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL = [MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatDialogModule]

@NgModule({
  declarations: [RuJobCardComponent],
  imports: [CommonModule, RuButtonModule, ...MATERIAL],
  exports: [RuJobCardComponent],
})
export class RuJobCardModule { }
