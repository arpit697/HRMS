import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { rotate } from 'src/app/animations/clock.anticlock';
import { DSR_PROJECT_DROP_DOWN } from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import { MY_DSR } from 'src/app/constants/routes';
import { DSR_TABLE_COLUMN, DSR_TABLE_DATA } from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  editorConfig = { ...EDITOR_CONFIG };
  tableColumns: Array<any> = [...DSR_TABLE_COLUMN];
  tableData = [...DSR_TABLE_DATA];
  dsrForm!: FormGroup;
  projects: any;
  content: string = '';
  panelOpenState: boolean = false;
  formFields = [
    { label: 'From Date', formControlName: '', type: 'datePicker' },
    { label: 'End Date', formControlName: '', type: 'datePicker' },
    { label: 'Submission Date', formControlName: '', type: 'select' },
    { label: 'Project', formControlName: '', type: 'select' },
    { label: 'Final Approval Status', formControlName: '', type: 'select' },
    { label: 'Hours', formControlName: '', type: 'select' },
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
  }
  createForm() {
    this.dsrForm = this._formBuilder.group({
      project_name: [],
      date: [],
      login_hours: [],
      dsr_detail: [],
    });
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
