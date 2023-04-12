import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { A } from '@fullcalendar/core/internal-common';
import { LEAVE_TYPE_DROP_DOWN } from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import { LEAVE_DETAIL } from 'src/app/constants/routes';
import {
  LEAVE_TABLE_COLUMN,
  LEAVE_TABLE_DATA,
} from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.scss'],
})
export class MyLeavesComponent implements OnInit {
  leaveForm!: FormGroup;
  leaveType: any;
  file_ulr: any;
  panelOpenState: boolean = false;
  content: string = '';
  editorConfig = { ...EDITOR_CONFIG };
  tableColumns: Array<any> = [...LEAVE_TABLE_COLUMN];
  tableData = [...LEAVE_TABLE_DATA];
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;
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

  constructor(
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.leaveType = LEAVE_TYPE_DROP_DOWN;
    this.createForm();
  }

  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }

  createForm() {
    this.leaveForm = this._formBuilder.group({
      type: [],
      half_day: [],
      start_day: [],
      end_day: [],
      remark: [],
      document: [],
      detail: [],
    });
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  cancelHandler() {
    this.panelOpenState = !this.panelOpenState;
  }
  submitHandler() {
    let obj: any = {
      first_button_icon: 'arrow_circle_right',
      second_button_icon: 'refresh',
      leave_type: 'Annual',
      request_from: 'John Doe',
      request_to: 'Manager',
      applied_on: '2022-01-01',
      status: 'Pending',
      level_one: 'Jane Smith',
      level_two: 'David Lee',
    };

    this.tableData.push(obj);
    this.tableComponent.dataSource.data = this.tableData; // update the data source
  }
  editDelete(event: any) {
    if (event.click_type == 'edit') {
      this._dataService.leaveDetail = { ...event };
      event = { ...event, id: this.utility.generateRandomNumber() };
      this._router.navigate([LEAVE_DETAIL.fullUrl, event.id]);
    }
    if (event.click_type == 'delete') {
      console.log('delete');
    }
  }

  getDocument(event: any) {
    this.utility
      .readURL(event, ['application/msword', 'application/pdf', 'text/plain'])
      .then((result: any) => {
        this.file_ulr = result;
        this.utility.bar('Resume Uploaded Successfully', '', 'green-snackbar');
      })
      .catch((error) => {
        this.utility.bar(
          'The attachment must be a file of type: msword, pdf, plain text',
          '',
          'red-snackbar'
        );
        console.error(error);
      });
  }
}
