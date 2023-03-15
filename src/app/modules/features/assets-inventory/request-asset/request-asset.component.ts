import { Component } from '@angular/core';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss'],
})
export class RequestAssetComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'asset_name',
      header: 'Asset Name',
      cell: (element: Record<string, any>) => `${element['asset_name']}`,
    },
    {
      columnDef: 'asset_category',
      header: 'Asset Category',
      cell: (element: Record<string, any>) => `${element['asset_category']}`,
    },
    {
      columnDef: 'computer_asset_code',
      header: 'Computer Asset Code',
      cell: (element: Record<string, any>) =>
        `${element['computer_asset_code']}`,
    },
    {
      columnDef: 'brand',
      header: 'Brand',
      cell: (element: Record<string, any>) => `${element['brand']}`,
    },
    {
      columnDef: 'serial_number',
      header: 'Serial Number',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'model',
      header: 'Model',
      cell: (element: Record<string, any>) => `${element['model']}`,
    },
    {
      columnDef: 'is_working',
      header: 'Is Working ?',
      cell: (element: Record<string, any>) => `${element['is_working']}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: Record<string, any>) => `${element['company']}`,
    },
  ];

  tableData = [
    {
      asset_name: 'Laptop',
      asset_category: 'Computers',
      computer_asset_code: 'C001',
      brand: 'Dell',
      serial_number: '123456789',
      model: 'Latitude',
      is_working: true,
      company: 'ABC Inc.',
    },
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
