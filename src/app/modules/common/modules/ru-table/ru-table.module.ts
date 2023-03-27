import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTableComponent } from './ru-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';





const MATERIAL = [
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatInputModule
];
@NgModule({
  declarations: [RuTableComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [RuTableComponent],
})
export class RuTableModule {}
