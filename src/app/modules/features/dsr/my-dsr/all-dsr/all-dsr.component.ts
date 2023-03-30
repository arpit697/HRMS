import { Component } from '@angular/core';

@Component({
  selector: 'app-all-dsr',
  templateUrl: './all-dsr.component.html',
  styleUrls: ['./all-dsr.component.scss']
})
export class AllDsrComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: '#',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'project_name',
      header: 'Project Name',
      cell: (element: Record<string, any>) => `${element['project_name']}`,
    },
    {
      columnDef: 'dsr',
      header: 'DSR',
      cell: (element: Record<string, any>) => `${element['dsr']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'pm_approval',
      header: 'PM Approval',
      cell: (element: Record<string, any>) => `${element['pm_approval']}`,
    },
    {
      columnDef: 'am_approval',
      header: 'AM Approval',
      cell: (element: Record<string, any>) => `${element['am_approval']}`,
    },
    {
      columnDef: 'rm_approval',
      header: 'RM Approval',
      cell: (element: Record<string, any>) => `${element['rm_approval']}`,
    },
    {
      columnDef: 'final_approval',
      header: 'Final Approval',
      cell: (element: Record<string, any>) => `${element['final_approval']}`,
    },
    {
      columnDef: 'logged_hrs',
      header: 'Logged Hrs',
      cell: (element: Record<string, any>) => `${element['logged_hrs']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<any> = []
}
