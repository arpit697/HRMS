import { Component, ViewChild } from '@angular/core';
import { RuTableComponent } from 'src/app/modules/common/modules/ru-table/ru-table.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
    {
      columnDef: 'school_university',
      header: 'School/University',
      cell: (element: Record<string, any>) => `${element['school_university']}`,
    },
    {
      columnDef: 'time_period',
      header: 'Time Period',
      cell: (element: Record<string, any>) => `${element['time_period']}`,
    },
  ];
  tableData: Array<any> = [];

  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;

  constructor() { }

  submitHandler() {
    this.tableData.push({ action: '1', school_university: '1', time_period: '1' });
    this.tableComponent.dataSource.data = this.tableData; // update the data source
  }

  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }
}

