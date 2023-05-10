import { Component } from '@angular/core';
import {
  WHOLE_DSR_TABLE_COLUMNS,
  WHOLE_DSR_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-all-dsr',
  templateUrl: './all-dsr.component.html',
  styleUrls: ['./all-dsr.component.scss'],
})
export class AllDsrComponent {
  tableColumns: Array<any> = [...WHOLE_DSR_TABLE_COLUMNS];
  tableData: Array<any> = [...WHOLE_DSR_TABLE_DATA];
}
