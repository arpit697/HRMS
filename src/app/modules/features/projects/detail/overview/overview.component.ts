import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  PlannedTableColumns: Array<any> = [
    {
      columnDef: 'mile_stones',
      header: 'Mile Stones',
      cell: (element: Record<string, any>) => `${element['mile_stones']}`,
    },
    {
      columnDef: 'release',
      header: 'Release',
      cell: (element: Record<string, any>) => `${element['release']}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['description']}`,
    },
    {
      columnDef: 'into_qa_date',
      header: 'Into QA Date',
      cell: (element: Record<string, any>) => `${element['into_qa_date']}`,
    },
    {
      columnDef: 'internal_demo_date',
      header: 'Internal Demo Date',
      cell: (element: Record<string, any>) =>
        `${element['internal_demo_date']}`,
    },
    {
      columnDef: 'released_date',
      header: 'Released Date',
      cell: (element: Record<string, any>) => `${element['released_date']}`,
    },
    {
      columnDef: 'delivery_status',
      header: 'Delivery Status',
      cell: (element: Record<string, any>) => `${element['delivery_status']}`,
    },
    {
      columnDef: 'sign_off_status',
      header: 'Sign Off Status',
      cell: (element: Record<string, any>) => `${element['sign_off_status']}`,
    },
  ];

  PlannedTableData = [];

  TeamTableColumns: Array<any> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'allocated_as',
      header: 'Allocated As',
      cell: (element: Record<string, any>) => `${element['allocated_as']}`,
    },
    {
      columnDef: 'department',
      header: 'Department',
      cell: (element: Record<string, any>) => `${element['department']}`,
    },
    {
      columnDef: 'alloc_hrs',
      header: 'Alloc Hrs',
      cell: (element: Record<string, any>) => `${element['alloc_hrs']}`,
    },
    {
      columnDef: 'exp',
      header: 'Exp',
      cell: (element: Record<string, any>) => `${element['exp']}`,
    },
    {
      columnDef: 'relevant_exp',
      header: 'Relevant Exp',
      cell: (element: Record<string, any>) => `${element['']}`,
    },
    {
      columnDef: 'hrs_log',
      header: 'Hrs Log',
      cell: (element: Record<string, any>) => `${element['hrs_log']}`,
    },
  ];

  TeamTableData = [
    {
      name: 'John Smith',
      allocated_as: 'Software Developer',
      department: 'Engineering',
      alloc_hrs: 160,
      exp: 5,
      relevant_exp: 3,
      hrs_log: 145,
    },
    {
      name: 'Jane Doe',
      allocated_as: 'Product Manager',
      department: 'Product',
      alloc_hrs: 160,
      exp: 7,
      relevant_exp: 5,
      hrs_log: 160,
    },
    {
      name: 'Bob Johnson',
      allocated_as: 'Marketing Specialist',
      department: 'Marketing',
      alloc_hrs: 160,
      exp: 3,
      relevant_exp: 2,
      hrs_log: 155,
    },
  ];
}
