import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTableComponent } from './ru-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const MATERIAL = [MatTableModule, MatPaginatorModule];
@NgModule({
  declarations: [RuTableComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [RuTableComponent],
})
export class RuTableModule {}
