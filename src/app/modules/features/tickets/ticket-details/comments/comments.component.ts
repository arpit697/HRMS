import { Component } from '@angular/core';
import {
  TICKET_ATTACHMENT_TABLE_COLUMN,
  TICKET_COMMENTS_TABLE_COLUMN,
  TICKET_COMMENTS_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  tableData = [...TICKET_COMMENTS_TABLE_DATA];
  tableColumns = [...TICKET_COMMENTS_TABLE_COLUMN];
}
