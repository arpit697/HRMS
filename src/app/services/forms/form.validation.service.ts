import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constants/validations/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constants/validations/validation.criteria';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  VALIDATION = {
    emptyControl: [],
    name: [
      Validators.required,
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
    last_name: [Validators.pattern(PATTERN.last_name)],
    address: [Validators.pattern(PATTERN.address)],
    month: [],
    year: [],
    skill : [
    Validators.maxLength(VALIDATION_CRITERIA.textAreaMaxLength)],
    phone: [
      Validators.pattern(PATTERN.phoneNumber),
      Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.phoneMaxLength),
    ],

    email: [
      Validators.required,
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    password: [
      Validators.required,
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    createPassword: [
      Validators.required,
      Validators.pattern(PATTERN.passRegex),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
  };

  minMaxDateValidator(minDate: Date, maxDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const date = control.value;

      if (date && (date < minDate || date > maxDate)) {
        return { minMaxDateInvalid: { value: control.value } };
      }

      return null;
    };
  }

  birthdayValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const birthday = new Date(control.value);
      const now = new Date();
      let age = now.getFullYear() - birthday.getFullYear();
      birthday.setFullYear(now.getFullYear());

      if (birthday > now) {
        birthday.setFullYear(now.getFullYear() - 1);
        age--;
      }

      if (age < minAge || age > maxAge) {
        return { birthdayInvalid: { value: control.value } };
      }

      return null;
    };
  }

  numberRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (value === null || value === undefined || value === '') {
        // Return null if the value is not set
        return null;
      }
      const num = Number(value);
      if (isNaN(num) || num < min || num > max) {
        // Return an error object if the value is not a number or is outside the range
        return { 'numberRange': true };
      }
      // Return null if the value is valid
      return null;
    };
  }
}
