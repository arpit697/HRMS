import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rotate } from 'src/app/animations/clock.anticlock';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent {

  constructor(private _route : Router){
    
  }

  defaultValue= {hour: 13, minute: 30};

  timeChangeHandler(event: Event) {
    console.log(event);
  }

  invalidInputHandler() {
    // some error handling  
  }


  formFields = [
    { label: 'From Date', formControlName: '', type: 'datePicker' },
    { label: 'End Date', formControlName: '', type: 'datePicker' },
    { label: 'Submission Date', formControlName: '', type: 'select' },
    { label: 'Project', formControlName: '', type: 'select' },
    { label: 'Final Approval Status', formControlName: '', type: 'select' },
    { label: 'Hours', formControlName: '', type: 'select' },
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
      columnDef: 'serial_number',
      header: 'Sr.No.',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'emp_name',
      header: 'Employee Name',
      cell: (element: Record<string, any>) => `${element['emp_name']}`,
    },
    {
      columnDef: 'emp_id',
      header: 'Employee Id',
      cell: (element: Record<string, any>) => `${element['emp_id']}`,
    },
    {
      columnDef: 'email',
      header: 'email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'employment_type',
      header: 'Employment Type',
      cell: (element: Record<string, any>) => `${element['employment_type']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'total_logged_hr',
      header: 'Total(logged) Hr',
      cell: (element: Record<string, any>) => `${element['total_logged_hr']}`,
    },
    {
      columnDef: 'final_approval',
      header: 'Final Approval',
      cell: (element: Record<string, any>) => `${element['final_approval']}`,
      type : 'button-action'
    },
  ];

  tableData = [
    {
      serial_number: 1,
      emp_name: 'John Smith',
      emp_id: 'A123',
      email: 'john.smith@example.com',
      employment_type: 'Full-time',
      date: '2022-03-15',
      total_logged_hr: 8,
      final_approval: 'Yes',
    },
    {
      serial_number: 2,
      emp_name: 'Jane Doe',
      emp_id: 'B456',
      email: 'jane.doe@example.com',
      employment_type: 'Part-time',
      date: '2022-03-15',
      total_logged_hr: 4,
      final_approval: 'Yes',
    },
    {
      serial_number: 3,
      emp_name: 'Bob Johnson',
      emp_id: 'C789',
      email: 'bob.johnson@example.com',
      employment_type: 'Full-time',
      date: '2022-03-16',
      total_logged_hr: 6,
      final_approval: 'No',
    },
  ];


  viewDetails(){
    this._route.navigate([])
  }
}
