import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constants/validations/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constants/validations/validation.criteria';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  VALIDATION = {
    emptyControl: [],
    name: [
      Validators.required,
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
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
}
