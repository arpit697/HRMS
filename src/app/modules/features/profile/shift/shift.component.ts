import { Component } from '@angular/core';
import {
  SHIFT_TABLE_COLUMN,
  SHIFT_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
})
export class ShiftComponent {
  tableColumns: Array<any> = [...SHIFT_TABLE_COLUMN];

  tableData = [...SHIFT_TABLE_DATA];
}
