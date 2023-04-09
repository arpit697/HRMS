import { Component, OnInit, ViewChild } from '@angular/core';
import {
  EDUCATION_LEVEL_DROP_DOWN,
  LANGUAGE_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { QUALIFICATION_TABLE_COLUMN } from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  educationLevel: any;
  languages: any;
  tableColumns: Array<any> = [...QUALIFICATION_TABLE_COLUMN];
  tableData: Array<any> = [];

  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;

  constructor() {}
  ngOnInit(): void {
    this.educationLevel = EDUCATION_LEVEL_DROP_DOWN;
    this.languages = LANGUAGE_DROP_DOWN;
  }

  submitHandler() {
    this.tableData.push({
      action: '1',
      school_university: '1',
      time_period: '1',
    });
    this.tableComponent.dataSource.data = this.tableData; // update the data source
  }

  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }
}
