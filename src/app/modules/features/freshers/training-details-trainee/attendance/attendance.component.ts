import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'attendance',
      header: 'Attendance',
      cell: (element: Record<string, any>) => `${element['attendance']}`,
    },
  ];

  tableData = [
    {
      serial_number: 1,
      topic: 'Introduction to Programming',
      date: '2022-03-01',
      attendance: 'Present',
    },
    {
      serial_number: 2,
      topic: 'Data Structures and Algorithms',
      date: '2022-03-05',
      attendance: 'Absent',
    },
    {
      serial_number: 3,
      topic: 'Object-Oriented Programming',
      date: '2022-03-08',
      attendance: 'Present',
    },
    {
      serial_number: 4,
      topic: 'Database Management Systems',
      date: '2022-03-12',
      attendance: 'Present',
    },
    {
      serial_number: 5,
      topic: 'Web Development',
      date: '2022-03-15',
      attendance: 'Absent',
    },
  ];
}
