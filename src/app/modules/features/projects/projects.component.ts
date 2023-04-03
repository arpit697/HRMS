import { Component } from '@angular/core';
import { ACCOUNT, PROJECT_DETAIL } from 'src/app/constants/routes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  openAtlassian() {
    window.open('https://www.atlassian.com/', '_blank');
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'project_name',
      header: 'Project Name',
      cell: (element: Record<string, any>) => `${element['project_name']}`,
      type : 'link'
    },
    {
      columnDef: 'billing_type',
      header: 'Billing Type',
      cell: (element: Record<string, any>) => `${element['billing_type']}`,
    },
    {
      columnDef: 'resource',
      header: 'Resource',
      cell: (element: Record<string, any>) => `${element['resource']}`,
    },
    {
      columnDef: 'hrs',
      header: 'Hrs.',
      cell: (element: Record<string, any>) => `${element['hrs']}`,
    },
    {
      columnDef: 'total_milestone',
      header: 'Total Milestone',
      cell: (element: Record<string, any>) => `${element['total_milestone']}`,
    },
    {
      columnDef: 'delivered',
      header: 'Delivered',
      cell: (element: Record<string, any>) => `${element['delivered']}`,
    },
    {
      columnDef: 'pending',
      header: 'Pending',
      cell: (element: Record<string, any>) => `${element['pending']}`,
    },
    {
      columnDef: 'completed',
      header: '% Completed',
      cell: (element: Record<string, any>) => `${element['completed']}`,
    },
  ];
  tableData = [
    {
      id : 12567,
      project_name: 'Project A',
      path : 'PROJECT_DETAIL',
      billing_type: 'Hourly',
      resource: 'John Smith',
      hrs: 40,
      total_milestone: 5,
      delivered: 3,
      pending: 1,
      completed: '60%',
    },
  ];
}
