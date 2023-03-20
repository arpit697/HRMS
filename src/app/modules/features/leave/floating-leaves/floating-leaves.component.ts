import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-leaves',
  templateUrl: './floating-leaves.component.html',
  styleUrls: ['./floating-leaves.component.scss'],
})
export class FloatingLeavesComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'event_name',
      header: 'Event Name',
      cell: (element: Record<string, any>) => `${element['event_name']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
  ];

  tableData = [
    { serial_number: 1, event_name: 'Conference', date: '2022-06-15' },
    { serial_number: 2, event_name: 'Webinar', date: '2022-07-21' },
    { serial_number: 3, event_name: 'Seminar', date: '2022-08-05' },
    { serial_number: 4, event_name: 'Workshop', date: '2022-09-03' },
    { serial_number: 5, event_name: 'Hackathon', date: '2022-10-08' },
  ];
}
