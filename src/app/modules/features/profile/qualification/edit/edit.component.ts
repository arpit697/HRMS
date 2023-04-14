import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  EDUCATION_LEVEL_DROP_DOWN,
  LANGUAGE_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  educationLevel: any;
  languages: any;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(Date.now());

  editQualificationForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.educationLevel = EDUCATION_LEVEL_DROP_DOWN;
    this.languages = LANGUAGE_DROP_DOWN;
    console.log(this.data);

    this.createForm();
  }

  createForm() {
    this.editQualificationForm = this.formBuilder.group({
      school_univercity: [
        this.data.school_univercity,
        [...this._formValidation.VALIDATION.required],
      ],
      education_level: [
        this.data.education_level,
        [...this._formValidation.VALIDATION.required],
      ],
      date_from: [
        this.data.date_from,
        [...this._formValidation.VALIDATION.required],
      ],
      date_to: [
        this.data.date_to,
        [...this._formValidation.VALIDATION.required],
      ],
      language: [
        this.data.language,
        [...this._formValidation.VALIDATION.required],
      ],
      professional_course: [this.data.professional_course],
      description: [this.data.descriptions],
    });
  }
  updateHandler() {
    if (this.editQualificationForm.value) {
      this.dialogRef.close({
        ...this.data,
        ...this.editQualificationForm.value,
      });
      this._utility.bar(
        'Qualification Update Successfully',
        '',
        'green-snackbar'
      );
    } else {
      this._utility.bar(
        this._utility.formCheck(this.editQualificationForm),
        '',
        'red-snackbar'
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
