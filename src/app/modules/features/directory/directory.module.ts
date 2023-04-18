import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuButtonModule } from '../../common/modules/common-button/ru-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OptionsFilterModule } from 'src/app/pipes/options-filter/options-filter.module';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule , 
];
@NgModule({
  declarations: [DirectoryComponent],
  imports: [CommonModule, DirectoryRoutingModule, RuButtonModule, OptionsFilterModule, ...MATERIAL],
})
export class DirectoryModule { }
