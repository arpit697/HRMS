import { Component } from '@angular/core';
import {
  PUNCH_LOG_TABLE_COULMN,
  PUNCH_LOG_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss'],
})
export class PunchLogComponent {
  tableColumns: Array<any> = [...PUNCH_LOG_TABLE_COULMN];
  tableData = [...PUNCH_LOG_TABLE_DATA];
  fields = [
    {
      label: 'Date',
      formControlName: 'date',
      type: '',
      placeholder: '',
    },
    {
      label: 'Employee',
      formControlName: 'company',
      type: 'select',
      placeholder: '',
    },
  ];
}
