import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';
import { MatCardModule } from '@angular/material/card';
import { ChunkModule } from 'src/app/pipes/chunk/chunk.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL = [MatCardModule, MatButtonModule, MatIconModule];
@NgModule({
  declarations: [LunchComponent],
  imports: [CommonModule, LunchRoutingModule, ChunkModule, ...MATERIAL],
})
export class LunchModule {}
