import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JOBS } from 'src/app/constants/app.constants';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';

@Component({
  selector: 'app-refer-candidate-dialog',
  templateUrl: './refer-candidate-dialog.component.html',
  styleUrls: ['./refer-candidate-dialog.component.scss'],
})
export class ReferCandidateDialogComponent implements OnInit {
  referCandidateFrom!: FormGroup;
  jobDetails: any
  constructor(
    public dialogRef: MatDialogRef<ReferCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
  ) { }
  ngOnInit(): void {
    [this.jobDetails] = [...JOBS.filter(item => item.id == this.data.id)]
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
    { label: 'Candidate Experience', formControlName: 'candidate_experience' },
    { label: 'Email ID', formControlName: 'email_id' },
    { label: 'Phone Number', formControlName: 'phone_number' },
  ];

  jobLocations = ['Noida' , 'Chandigarh']

  crateForm() {
    this.referCandidateFrom = this._formBuilder.group({
      department_name: [{value:this.jobDetails.tech_name , disabled: true}],
      job_code: [{value:this.jobDetails.id , disabled: true}],
      location: [{value:this.jobDetails.location , disabled: true}],
      experience: [{value:`${this.jobDetails.experience.from} to ${this.jobDetails.experience.to}` , disabled: true}],
      job_location: [],
      candidate_name: [],
      position_title: [{value:this.jobDetails.department , disabled: true}],
      candidate_experience: [],
      email_id: [null , ...this._formValidation.VALIDATION.email],
      phone_number: [],
      skill : ['' , [...this._formValidation.VALIDATION.skill]]
    });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Check if file type is allowed
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        console.log('hello');
      }
      const reader = new FileReader();
      reader.onload = (e) => reader.readAsDataURL(file);
    }
  }
  

  

  submitHandler() {
    console.log(this.referCandidateFrom);
  }
  cancelHandler() {

  }
  close() {
    this.dialogRef.close();
  }
}
