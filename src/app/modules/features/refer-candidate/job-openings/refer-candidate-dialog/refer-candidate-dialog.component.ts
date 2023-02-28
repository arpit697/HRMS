import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-refer-candidate-dialog',
  templateUrl: './refer-candidate-dialog.component.html',
  styleUrls: ['./refer-candidate-dialog.component.scss'],
})
export class ReferCandidateDialogComponent implements OnInit {
  referCandidateFrom!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReferCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
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
    { label: 'Candidate_Experience', formControlName: 'candidate_experience' },
    { label: 'Email ID', formControlName: 'email_id' },
    { label: 'Phone Number', formControlName: 'phone_number' },
  ];

  crateForm() {
    this.referCandidateFrom = this._formBuilder.group({
      department_name: [],
      job_code: [],
      location: [],
      experience: [],
      job_location: [],
      candidate_name: [],
      position_title: [],
      email_id: [],
      candidate_experience: [],
      phone_number: [],
    });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => reader.readAsDataURL(file);
    }
  }
}
