import { Component } from '@angular/core';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss'],
})
export class RequestedTrainingsComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'Serial Number',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'training_name',
      header: 'Training Name',
      cell: (element: Record<string, any>) => `${element['training_name']}`,
    },
    {
      columnDef: 'timeline',
      header: 'Timeline To Conduct',
      cell: (element: Record<string, any>) => `${element['timeline']}`,
    },
    {
      columnDef: 'requested_date',
      header: 'Requested Date',
      cell: (element: Record<string, any>) => `${element['requested_date']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
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
    //   training_name: 'Sales Training',
    //   timeline: 'April 2023',
    //   requested_date: 'February 5, 2023',
    //   status: 'Approved',
    //   action: 'Edit',
    // },
  ];
}
