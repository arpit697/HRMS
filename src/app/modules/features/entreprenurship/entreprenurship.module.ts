import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreprenurshipRoutingModule } from './entreprenurship-routing.module';
import { EntreprenurshipComponent } from './entreprenurship.component';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';

import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RoutingModule } from 'src/app/pipes/routing/routing.module';
const MATERIAL = [MatDialogModule , MatCardModule];

@NgModule({
  declarations: [EntreprenurshipComponent],
  imports: [
    CommonModule,
    EntreprenurshipRoutingModule,
    EditorModule,
    RuButtonModule,
    FormsModule,
    MatButtonModule,
    RoutingModule,
    ...MATERIAL,
  ],
})
export class EntreprenurshipModule {}
