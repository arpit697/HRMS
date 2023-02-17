import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
    {
      columnDef: 'school/university',
      header: 'School/Univercity',
      cell: (element: Record<string, any>) => `${element['school/university']}`,
    },
    {
      columnDef: 'time_period',
      header: 'Time Period',
      cell: (element: Record<string, any>) => `${element['time_period']}`,
    },
  ];

  tableData = [];
}
