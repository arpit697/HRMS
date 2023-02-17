import { Component } from '@angular/core';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
})
export class ShiftComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'joining',
      header: 'Date Of Joining',
      cell: (element: Record<string, any>) => `${element['joining']}`,
    },
    {
      columnDef: 'shift',
      header: 'Office Shift',
      cell: (element: Record<string, any>) => `${element['shift']}`,
    },
  ];

  tableData = [
    {
      joining: '27-Feb-2022',
      shift: 'Morning Shift',
    },
  ];
}
