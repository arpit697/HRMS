import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  declarations: [DirectoryComponent],
  imports: [CommonModule, DirectoryRoutingModule, RuButtonModule, ...MATERIAL],
})
export class DirectoryModule {}
