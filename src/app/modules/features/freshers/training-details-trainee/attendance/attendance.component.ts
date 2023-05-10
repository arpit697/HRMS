import { Component } from '@angular/core';
import {
  ATTENDANCE_TABLE_COLUMN,
  ATTENDANCE_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  tableColumns: Array<any> = [...ATTENDANCE_TABLE_COLUMN];

  tableData = [...ATTENDANCE_TABLE_DATA];
}
