import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GENDERS, MARITAL_STATUS } from 'src/app/constants/app.constants';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  genders!: any;
  marital_status!: any;
  constructor(
    public formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _utility: UtilityService
  ) {}

  basicInfoForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.genders = GENDERS;
    this.marital_status = MARITAL_STATUS;
  }

  createForm() {
    this.basicInfoForm = this.formBuilder.group({
      first_name: ['Arpit', [...this._formValidation.VALIDATION.name]],
      last_name: ['Dwivedi', [...this._formValidation.VALIDATION.last_name]],
      birthday: [
        new Date(1996, 6, 29),
        [this._formValidation.birthdayValidator(18, 50)],
      ],
      gender: ['male'],
      marital_status: ['single'],
      contact_number: [7071520965, [...this._formValidation.VALIDATION.phone]],
      working_experience_year: [
        0,
        [this._formValidation.numberRangeValidator(0, 50)],
      ],
      working_experience_month: [
        0,
        [this._formValidation.numberRangeValidator(0, 12)],
      ],
      relevant_experience_year: [
        0,
        [this._formValidation.numberRangeValidator(0, 50)],
      ],
      relevant_experience_month: [
        0,
        [this._formValidation.numberRangeValidator(0, 12)],
      ],
      address: ['Noida Sector 4', [...this._formValidation.VALIDATION.address]],
    });
  }
  submitHandler() {
    if (this.basicInfoForm.dirty) {
      if (this.basicInfoForm.valid) {
        this._utility.bar(
          'Details Submitted Successfully',
          '',
          'green-snackbar'
        );
      } else {
        this._utility.bar(
          this._utility.formCheck(this.basicInfoForm),
          '',
          'red-snackbar'
        );
      }
    } else {
      this._utility.bar('Please Edit The Details First', '', 'red-snackbar');
    }
  }
}
