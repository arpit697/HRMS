import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss'],
})
export class ManualPunchComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'edit',
      header: 'Edit',
      cell: (element: Record<string, any>) => `${element['edit']}`,
    },
    {
      columnDef: 'manual_punch_date',
      header: 'Manual Punch Date',
      cell: (element: Record<string, any>) => `${element['manual_punch_date']}`,
    },
    {
      columnDef: 'in_time',
      header: 'In Time',
      cell: (element: Record<string, any>) => `${element['in_time']}`,
    },
    {
      columnDef: 'out_time',
      header: 'Out Time',
      cell: (element: Record<string, any>) => `${element['out_time']}`,
    },
  ];

  tableData = [];
}
