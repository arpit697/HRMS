import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  DEPARTMENTS_DROP_DOWN,
  REQUEST_TRAINING_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-request-training-dialog',
  templateUrl: './request-training-dialog.component.html',
  styleUrls: ['./request-training-dialog.component.scss'],
})
export class RequestTrainingDialogComponent implements OnInit {
  requestTrainingForm!: FormGroup;
  trainingName = REQUEST_TRAINING_DROP_DOWN;
  teamName = DEPARTMENTS_DROP_DOWN;

  constructor(
    public dialogRef: MatDialogRef<RequestTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.requestTrainingForm = this._formBuilder.group({
      training_name: [null, [...this._formValidation.VALIDATION.required]],
      team_name: [null, [...this._formValidation.VALIDATION.required]],
      question_one: [null, [...this._formValidation.VALIDATION.required]],
      question_two: [null, [...this._formValidation.VALIDATION.required]],
      intrested: [null, [...this._formValidation.VALIDATION.required]],
      timeline: [null, [...this._formValidation.VALIDATION.required]],
    });
  }

  submitHandler() {
    if (this.requestTrainingForm.valid) {
      const obj = {
        ...this.requestTrainingForm.value,
        serial_number: this.utility.generateRandomNumber(),
        requested_date: this.utility.getCurrentDate(),
        status: 'Approved',
        action: 'N/A',
      };
      this._dataService.trainingRequest.push(obj);
      this.utility.bar('Request Submitted Successfully', '', 'green-snackbar');
      this.dialogRef.close();
    } else {
      this.utility.bar(
        this.utility.formCheck(this.requestTrainingForm),
        '',
        'red-snackbar'
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
