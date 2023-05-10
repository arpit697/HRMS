import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { options } from '@fullcalendar/core/preact';
import {
  DEPARTMENTS_DROP_DOWN,
  REFERRAL_STATUS_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import {
  INTERVIEW_TABLE_COLUMN,
  INTERVIEW_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent implements OnInit {
  
  tableColumns: Array<any> = [...INTERVIEW_TABLE_COLUMN];
  tableData = [...INTERVIEW_TABLE_DATA];

  departments = <any>[];
  status = <any>[];
  dropDownForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.departments = DEPARTMENTS_DROP_DOWN;
    this.status = REFERRAL_STATUS_DROP_DOWN;
    console.log(this.departments, this.status);
    this.createForm();
  }

  createForm() {
    this.dropDownForm = this._formBuilder.group({
      department: [],
      status: [],
    });
  }
}
