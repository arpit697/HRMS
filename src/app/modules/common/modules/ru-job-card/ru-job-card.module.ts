import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuJobCardComponent } from './ru-job-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const MATERIAL = [MatCardModule , MatIconModule , MatDividerModule]

@NgModule({
  declarations: [RuJobCardComponent],
  imports: [CommonModule , ...MATERIAL],
  exports: [RuJobCardComponent],
})
export class RuJobCardModule {}
