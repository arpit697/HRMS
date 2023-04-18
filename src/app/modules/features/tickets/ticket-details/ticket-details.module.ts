import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketDetailsRoutingModule } from './ticket-details-routing.module';
import { TicketDetailsComponent } from './ticket-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './comments/comments.component';
import { TicketFilesComponent } from './ticket-files/ticket-files.component';
import { NoteComponent } from './note/note.component';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL = [
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule ,
  MatDividerModule
];

@NgModule({
  declarations: [TicketDetailsComponent, DetailsComponent, CommentsComponent, TicketFilesComponent, NoteComponent],
  imports: [
    CommonModule,
    TicketDetailsRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class TicketDetailsModule {}
