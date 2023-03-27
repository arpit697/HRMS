import { Component } from '@angular/core';
import { A } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.scss'],
})
export class MyLeavesComponent {
  datePickers = [
    { label: 'Start Date', name: 'startDate' },
    { label: 'End Date', name: 'endDate' },
  ];

  employeeLeaves = [
    { type: 'Planned Leave', total: 6, claimed: 0 },
    { type: 'Privileged Leave', total: 6, claimed: 0 },
    { type: 'Emergency Leave', total: 6, claimed: 0 },
    { type: 'Short Leave', total: 10, claimed: 0 },
  ];

  content: string = '';
  editorConfig = {
    toolbar: [
      { name: 'document', items: ['Print'] },
      { name: 'clipboard', items: ['Undo', 'Redo'] },
      { name: 'styles', items: ['Styles', 'Format'] },
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'],
      },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Outdent',
          'Indent',
          '-',
          'Blockquote',
        ],
      },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'editing', items: ['Scayt'] },
      { name: 'mode', items: ['Source'] },
    ],
  };

  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
    {
      columnDef: 'leave_type',
      header: 'Leave Type',
      cell: (element: Record<string, any>) => `${element['level_type']}`,
    },
    {
      columnDef: 'request_form',
      header: 'Request Form',
      cell: (element: Record<string, any>) => `${element['request_form']}`,
    },
    {
      columnDef: 'request_to',
      header: 'Request To',
      cell: (element: Record<string, any>) => `${element['request_to']}`,
    },
    {
      columnDef: 'applied_on',
      header: 'Applied On',
      cell: (element: Record<string, any>) => `${element['applied_on']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'level_one',
      header: 'Level One',
      cell: (element: Record<string, any>) => `${element['level_one']}`,
    },
    {
      columnDef: 'level_two',
      header: 'Level Two',
      cell: (element: Record<string, any>) => `${element['level_two']}`,
    },
  ];

  tableData = [
    {
      action: 'View',
      leave_type: 'Annual',
      request_form: 'John Doe',
      request_to: 'Manager',
      applied_on: '2022-01-01',
      status: 'Pending',
      level_one: 'Jane Smith',
      level_two: 'David Lee',
    },
    {
      action: 'Edit',
      leave_type: 'Sick',
      request_form: 'Sarah Johnson',
      request_to: 'Supervisor',
      applied_on: '2022-02-15',
      status: 'Approved',
      level_one: 'Mark Davis',
      level_two: 'Nancy Brown',
    },
    {
      action: 'Delete',
      leave_type: 'Maternity',
      request_form: 'Emily Wilson',
      request_to: 'HR Manager',
      applied_on: '2022-03-10',
      status: 'Rejected',
      level_one: 'Alex Rodriguez',
      level_two: 'Samuel Kim',
    },
    {
      action: 'View',
      leave_type: 'Bereavement',
      request_form: 'Chris Evans',
      request_to: 'Team Lead',
      applied_on: '2022-04-05',
      status: 'Pending',
      level_one: 'Olivia Parker',
      level_two: 'Ryan Lee',
    },
    {
      action: 'Edit',
      leave_type: 'Personal',
      request_form: 'Daniel Brown',
      request_to: 'Manager',
      applied_on: '2022-05-20',
      status: 'Approved',
      level_one: 'Jessica Kim',
      level_two: 'Erica Davis',
    },
  ];


  leaveDetail = [
    {tag :"Employee Name" , detail : 'Arpit Dwivedi (AI1558)'},
    {tag :"Leave Type" , detail : 'Short Leaves'},
    {tag :"Leave Duration" , detail : '5:00 PM - 7:00 PM'},
    {tag :"Applied Duration" , detail : 'Mar-17-2023'},
    {tag :"Start Date" , detail : 'Mar-17-2023'},
    {tag :"End Date" , detail : 'Mar-17-2023'},
    {tag :"Uploaded " , detail : ''},
  ]
}
