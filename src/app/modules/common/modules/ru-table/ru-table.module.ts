import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTableComponent } from './ru-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL = [MatTableModule, MatPaginatorModule, MatIconModule];
@NgModule({
  declarations: [RuTableComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [RuTableComponent],
})
export class RuTableModule {}
