import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { ReferCandidateDialogComponent } from '../../../refer-candidate/job-openings/refer-candidate-dialog/refer-candidate-dialog.component';

@Component({
  selector: 'app-request-training-dialog',
  templateUrl: './request-training-dialog.component.html',
  styleUrls: ['./request-training-dialog.component.scss'],
})
export class RequestTrainingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RequestTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}
  close() {
    this.dialogRef.close();
  }
}
