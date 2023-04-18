import { Component } from '@angular/core';
import {
  TICKET_ATTACHMENT_TABLE_COLUMN,
  TICKET_ATTACHMENT_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-ticket-files',
  templateUrl: './ticket-files.component.html',
  styleUrls: ['./ticket-files.component.scss'],
})
export class TicketFilesComponent {
  tableColumn = [...TICKET_ATTACHMENT_TABLE_COLUMN];
  tableData = [...TICKET_ATTACHMENT_TABLE_DATA];
  getAttachment($event: Event) {
    throw new Error('Method not implemented.');
  }
}
