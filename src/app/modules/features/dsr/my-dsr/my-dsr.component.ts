import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { rotate } from 'src/app/animations/clock.anticlock';
import { DSR_PROJECT_DROP_DOWN } from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import { MY_DSR } from 'src/app/constants/routes';
import { DSR_TABLE_COLUMN, DSR_TABLE_DATA } from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;
  editorConfig = { ...EDITOR_CONFIG };
  tableColumns: Array<any> = [...DSR_TABLE_COLUMN];
  tableData = [...DSR_TABLE_DATA];
  dsrForm!: FormGroup;
  filterForm!: FormGroup;
  projects: any;
  content: string = '';
  panelOpenState: boolean = false;
  filterValues: any[] = [];

  formFields = [
    { label: 'From Date', formControlName: 'start_date', type: 'datePicker' },
    { label: 'End Date', formControlName: 'end_date', type: 'datePicker' },
    {
      label: 'Submission Date',
      formControlName: 'submission_date',
      type: 'select',
    },
    { label: 'Project', formControlName: 'project', type: 'select' },
    {
      label: 'Final Approval Status',
      formControlName: 'status',
      type: 'select',
    },
    { label: 'Hours', formControlName: 'timing', type: 'select' },
  ];
  constructor(
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.projects = DSR_PROJECT_DROP_DOWN;
    this.createForm();
    this.createFilterForm();
  }
  createForm() {
    this.dsrForm = this._formBuilder.group({
      project_name: [],
      date: [],
      login_hours: [],
      dsr_detail: [],
    });
  }
  createFilterForm() {
    this.filterForm = this._formBuilder.group({
      start_date: [''],
      end_date: [''],
      submission_date: [''],
      project: [''],
      status: [''],
      timing: [''],
    });
  }
  ngAfterViewInit(): void {
    this.tableComponent.tableData = this.tableData;
  }

  reset() {
    this.filterForm.reset({
      start_date: [''],
      end_date: [''],
      submission_date: [''],
      project: [''],
      status: [''],
      timing: [''],
    });
    this.search();
  }
  search() {
    let arr = Object.values(this.filterForm.value).map((value) =>
      String(value)
    );
    console.log(arr);

    this.tableComponent.applyFilter(arr);
    this.tableComponent.dataSource.data = this.tableData;
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  submitHandler() {
    console.log(this.dsrForm.value);
  }
  viewDetails(event: any) {
    console.log(event);
    this._dataService.leaveDetail = { ...event };

    this._route.navigate([
      MY_DSR.fullUrl,
      this._utility.generateRandomNumber(),
      event.date,
    ]);
  }
}
