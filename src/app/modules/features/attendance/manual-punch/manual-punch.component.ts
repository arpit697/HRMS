import { Component } from '@angular/core';
import { MANUAL_PUNCH_TABLE_COLUMN } from 'src/app/constants/table.data';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss'],
})
export class ManualPunchComponent {
  tableColumns: Array<any> = [...MANUAL_PUNCH_TABLE_COLUMN];
  tableData = [];
  fields = [
    {
      label: 'Punch Request',
      formControlName: 'punch_request',
      type: '',
      placeholder: '',
    },
    {
      label: 'Employee',
      formControlName: 'company',
      type: 'select',
      placeholder: '',
    },
    {
      label: 'Employee',
      formControlName: 'employee',
      type: '',
      placeholder: '',
    },
  ];
  
}
