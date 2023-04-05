import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JOBS } from 'src/app/constants/app.constants';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-refer-candidate-dialog',
  templateUrl: './refer-candidate-dialog.component.html',
  styleUrls: ['./refer-candidate-dialog.component.scss'],
})
export class ReferCandidateDialogComponent implements OnInit {
  referCandidateFrom!: FormGroup;
  jobDetails: any;
  file_ulr: any;
  constructor(
    public dialogRef: MatDialogRef<ReferCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}
  ngOnInit(): void {
    [this.jobDetails] = [...JOBS.filter((item) => item.id == this.data.id)];
    console.log(this.jobDetails);
    
    this.crateForm();
  }

  preFilledFields = [
    { label: 'Department Name', formControlName: 'department_name' },
    { label: 'Job Code', formControlName: 'job_code' },
    { label: 'Location', formControlName: 'location' },
    { label: 'Experience', formControlName: 'experience' },
  ];

  ManualFillFields = [
    { label: 'Job Location', formControlName: 'job_location', select: true },
    { label: 'Candidate Name', formControlName: 'candidate_name' },
    { label: 'Position Title', formControlName: 'position_title' },
    {
      label: 'Candidate Experience',
      formControlName: 'candidate_experience',
      type: 'number',
    },
    { label: 'Email ID', formControlName: 'email_id' },
    { label: 'Phone Number', formControlName: 'phone_number' },
  ];

  jobLocations = ['Noida', 'Chandigarh'];

  crateForm() {
    this.referCandidateFrom = this._formBuilder.group({
      department_name: [{ value: this.jobDetails.tech_name, disabled: true }],
      job_code: [{ value: this.jobDetails.id, disabled: true }],
      location: [{ value: this.jobDetails.location, disabled: true }],
      experience: [
        {
          value: `${this.jobDetails.experience.from} to ${this.jobDetails.experience.to}`,
          disabled: true,
        },
      ],
      job_location: ['Noida', [...this._formValidation.VALIDATION.required]],
      candidate_name: [null, [...this._formValidation.VALIDATION.name]],
      position_title: [{ value: this.jobDetails.department, disabled: true }],
      candidate_experience: [
        null,
        [...this._formValidation.VALIDATION.required],
      ],
      email_id: [null, [...this._formValidation.VALIDATION.email]],
      phone_number: [
        '',
        [
          ...this._formValidation.VALIDATION.phone,
          ...this._formValidation.VALIDATION.required,
        ],
      ],
      skill: ['', [...this._formValidation.VALIDATION.skill]],
    });
  }

  getResume(event: any) {
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

  submitHandler() {
    if (this.referCandidateFrom.valid) {
      let formValue = {
        ...this.referCandidateFrom.value,
        candidate_status: 'Submitted',
        date_of_referral: this.utility.getCurrentDate(),
        serial_number: parseInt(this._dataService.referredCandidate.length) + 1,
        department_name: (<any>(
          this.referCandidateFrom.get('department_name')
        )).getRawValue(),
        position_title: (<any>(
          this.referCandidateFrom.get('position_title')
        )).getRawValue(),
        id: this.utility.generateRandomNumber(),
        path: 'CANDIDATE_PROFILE',
        button_icon: 'download',
        action: 'Download',
        fiel_url: this.file_ulr,
      };
      this._dataService.referredCandidate.push(formValue);
      this.utility.bar('Refer candidate successfully', '', 'green-snackbar');
      this.dialogRef.close();
    } else {
      this.utility.bar(
        this.utility.formCheck(this.referCandidateFrom),
        '',
        'red-snackbar'
      );
    }
  }
  cancelHandler() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
