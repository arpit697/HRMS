import { Component } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No.',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'department',
      header: 'Department',
      cell: (element: Record<string, any>) => `${element['department']}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'mobile_number',
      header: 'Mobile No.',
      cell: (element: Record<string, any>) => `${element['mobile_number']}`,
    },
    {
      columnDef: 'round_type',
      header: 'Round Type',
      cell: (element: Record<string, any>) => `${element['round_type']}`,
    },
    {
      columnDef: 'interview_date',
      header: 'Interview Date',
      cell: (element: Record<string, any>) => `${element['interview_date']}`,
    },
    {
      columnDef: 'interview_time',
      header: 'Interview Time',
      cell: (element: Record<string, any>) => `${element['interview_time']}`,
    },
    {
      columnDef: 'final_status',
      header: 'Final Status',
      cell: (element: Record<string, any>) => `${element['final_status']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData = [
    // {
    //   serial_number: 1,
    //   department: 'Human Resources',
    //   name: 'John Smith',
    //   email: 'john.smith@example.com',
    //   mobile_number: '+1 (555) 123-4567',
    //   round_type: 'Final Round',
    //   interview_date: '2023-03-15',
    //   interview_time: '14:00',
    //   final_status: 'Accepted',
    //   action: 'View Profile',
    // },
    // add more mock data if needed
  ];

  selectFilter = [
    { label: 'Department', formControlName: 'department' },
    { label: 'Status', formControlName: 'status' },
  ];

  searchFilter = [
    {
      label_horizontal_left: 'Show',
      label_horizontal_right: 'Entries',
      formControlName: '',
      type: 'select',
    },
    { label_horizontal_left: 'Search :', formControlName: '', type: 'input' },
  ];
}
