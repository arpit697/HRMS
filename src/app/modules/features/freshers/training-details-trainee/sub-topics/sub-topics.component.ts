import { Component } from '@angular/core';
import {
  SUB_TOPIC_TABLE_COLUMN,
  SUB_TOPIC_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss'],
})
export class SubTopicsComponent {
  tableColumns: Array<any> = [...SUB_TOPIC_TABLE_COLUMN];
  tableData = [...SUB_TOPIC_TABLE_DATA];
}
