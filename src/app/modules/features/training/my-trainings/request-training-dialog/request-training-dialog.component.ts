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
  trainingName: any;
  teamName: any;
  constructor(
    public dialogRef: MatDialogRef<RequestTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.trainingName = REQUEST_TRAINING_DROP_DOWN;
    this.teamName = DEPARTMENTS_DROP_DOWN;
    this.createForm();
  }

  createForm() {
    this.requestTrainingForm = this._formBuilder.group({
      training_name: [],
      team_name: [],
      question_one: [],
      question_two: [],
      intrested: [],
      timeline: [],
    });
  }
  submitHandler() {
    console.log(this.requestTrainingForm.value);
  }
  close() {
    this.dialogRef.close();
  }
}
