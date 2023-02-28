import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss'],
})
export class PolicyDocumentsComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: '#',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'type',
      header: 'Type',
      cell: (element: Record<string, any>) => `${element['type']}`,
    },
    {
      columnDef: 'file_size',
      header: 'File Size',
      cell: (element: Record<string, any>) => `${element['file_size']}`,
    },
    {
      columnDef: 'last_modified',
      header: 'Last Modified',
      cell: (element: Record<string, any>) => `${element['last_modified']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: any) => `${element['action']}`,
      isLink: true,
    },
  ];

  tableData = [
    {
      serial_number: 1,
      name: 'Appinventiv Policy Manual',
      type: 'PDF',
      file_size: '2.3 MB',
      last_modified: '2022-12-01',
      action: 'Download',
      file_url: 'assets/policyDoc/Appinventiv_Policy_Manual.pdf',
    },
    {
      serial_number: 2,
      name: 'Contact List Updated Appinventiv',
      type: 'PDF',
      file_size: '5.1 MB',
      last_modified: '2022-11-15',
      action: 'Download',
      file_url: 'assets/policyDoc/Contact_List_Updated_Appinventiv.pdf',
    },
    {
      serial_number: 3,
      name: 'Employee Referral Policy',
      type: 'PDF',
      file_size: '1.7 MB',
      last_modified: '2022-11-27',
      action: 'Download',
      file_url: 'assets/policyDoc/Employee Referral Policy.pdf',
    },
    {
      serial_number: 4,
      name: 'Holiday Calendar 2023',
      type: 'JPG',
      file_size: '10.2 MB',
      last_modified: '2022-10-10',
      action: 'Download',
      file_url: 'assets/policyDoc/Holiday-Calendar-2023.jpg',
    },
    {
      serial_number: 5,
      name: 'Leave Policy',
      type: 'PDF',
      file_size: '0.8 MB',
      last_modified: '2022-12-12',
      action: 'Download',
      file_url: 'assets/policyDoc/LeavePolicy.pdf',
    },
    {
      serial_number: 6,
      name: 'Sexual Harassment',
      type: 'PDF',
      file_size: '0.8 MB',
      last_modified: '2022-12-12',
      action: 'Download',
      file_url: 'assets/policyDoc/SexualHarassment.pdf',
    },
  ];
}
