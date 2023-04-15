import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
})
export class FeedbackDialogComponent implements OnInit {
  detail: any;
  feedbackForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.detail = EMPLOYEE_TRAINING_DATA.find(
      (item) => item.id === this.data?.id
    );
    this.createForm();
  }
  createForm() {
    this.feedbackForm = this._formBuilder.group({
      goal_fullfilled: [null, [...this._formValidation.VALIDATION.required]],
      relevant: [null, []],
      overall: [null, []],
      session_content: [null, []],
      feedback_description: [null, []],
    });
  }
  close() {
    this.dialogRef.close();
  }

  submitHandler() {
    if (this.feedbackForm.valid) {
      this._utility.bar(
        'Feedback Submitted Successfully',
        '',
        'green-snackbar'
      );
      this.dialogRef.close();
    } else {
      this._utility.bar(
        this._utility.formCheck(this.feedbackForm),
        '',
        'red-snackbar'
      );
    }
  }
}
