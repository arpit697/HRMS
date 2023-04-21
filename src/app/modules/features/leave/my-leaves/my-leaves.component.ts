import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
import { LeaveRollbackDialogComponent } from '../../includes/utilities/popups/leave-rollback/leave-rollback-dialog.component';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.scss'],
})
export class MyLeavesComponent implements OnInit {
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;
  leaveForm!: FormGroup;
  leaveType: any;
  file_ulr: any;
  panelOpenState: boolean = false;
  content: string = '';
  editorConfig = { ...EDITOR_CONFIG };
  tableColumns: Array<any> = [...LEAVE_TABLE_COLUMN];
  tableData = [...LEAVE_TABLE_DATA];
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
    private _utility: UtilityService,
    private _router: Router,
    private _dialog: MatDialog
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
      leave_type: [, [...this._formValidation.VALIDATION.required]],
      half_day: [],
      start_day: [, [...this._formValidation.VALIDATION.required]],
      end_day: [, [...this._formValidation.VALIDATION.required]],
      remark: [, [...this._formValidation.VALIDATION.required]],
      document: [],
      detail: [, [...this._formValidation.VALIDATION.required]],
      isChecked: [false],
    });
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  cancelHandler() {
    this.panelOpenState = !this.panelOpenState;
  }
  submitHandler() {
    if (this.leaveForm.valid) {
      let obj: any = {
        ...this.leaveForm.value,
        first_button_icon: 'arrow_circle_right',
        second_button_icon: 'refresh',
        request_from: 'AI1558',
        request_to: 'Manager',
        applied_on: this._utility.getCurrentDate(),
        status: 'Pending',
        level_one: 'Suyash Saxena(AI057)',
        level_two: 'HR (Human Resourse)',
      };

      this.tableData.push(obj);
      this._utility.bar('Leave Applied Successfully', '', 'green-snackbar');
      this.leaveForm.reset();
      this.tableComponent.dataSource.data = this.tableData; // update the data source
    } else {
      this._utility.bar(
        this._utility.formCheck(this.leaveForm),
        '',
        'red-snackbar'
      );
    }
  }
  editDelete(event: any) {
    if (event.click_type == 'edit') {
      this._dataService.leaveDetail = { ...event };
      event = { ...event, id: this._utility.generateRandomNumber() };
      this._router.navigate([LEAVE_DETAIL.fullUrl, event.id]);
    }
    if (event.click_type == 'delete') {
      this.cancelLeaveDialog(event);
    }
  }

  cancelLeaveDialog(data?: any): void {
    const dialogRef = this._dialog.open(LeaveRollbackDialogComponent, {
      data: { ...data },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let index = this._utility.findIndexByPropertyValue(
          this.tableData,
          'id',
          result.id
        );
        this.tableData[index] = result;
        this.tableComponent.dataSource.data = this.tableData; // update the data source
      }
    });
  }

  getDocument(event: any) {
    this._utility
      .readURL(event, ['application/msword', 'application/pdf', 'text/plain'])
      .then((result: any) => {
        this.file_ulr = result;
        this._utility.bar('Resume Uploaded Successfully', '', 'green-snackbar');
      })
      .catch((error) => {
        this._utility.bar(
          'The attachment must be a file of type: msword, pdf, plain text',
          '',
          'red-snackbar'
        );
        console.error(error);
      });
  }
}
