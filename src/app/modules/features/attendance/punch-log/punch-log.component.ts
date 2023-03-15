import { Component } from '@angular/core';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss'],
})
export class PunchLogComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'punch_time',
      header: 'Punch Time',
      cell: (element: Record<string, any>) => `${element['punch_time']}`,
    },
    {
      columnDef: 'direction',
      header: 'Direction',
      cell: (element: Record<string, any>) => `${element['direction']}`,
    },
  ];

  tableData = [];
}
