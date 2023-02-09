import { Injectable } from "@angular/core";
import {
  Validators,
  AbstractControl,
  FormGroup,
  FormArray,
  ValidatorFn,
  FormControl,
} from "@angular/forms";
import { PATTERN } from "../constant/patterns";
import { VALIDATION_CRITERIA } from "../constant/validation-criteria";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor() {}
  customValidators = {
    match(
      field: string,
      label?,
      parentControl?: FormGroup | FormArray
    ): ValidatorFn {
      return this.compare(
        field,
        "MATCH",
        label || field,
        parentControl
      )((a, b) => a === b);
    },
    lowerThan(
      field: string,
      label?,
      parentControl?: FormGroup | FormArray
    ): ValidatorFn {
      return this.compare(
        field,
        "LOWER",
        label || field,
        parentControl
      )((a, b) => a <= b);
    },
    higherThan(
      field: string,
      label?,
      parentControl?: FormGroup | FormArray
    ): ValidatorFn {
      return this.compare(
        field,
        "HIGHER",
        label || field,
        parentControl
      )((a, b) => a >= b);
    },
    compare(
      field: string,
      type: "MATCH" | "LOWER" | "HIGHER",
      label,
      parentControl?: FormGroup | FormArray
    ) {
      return (fn: (a: any, b: any) => boolean) => {
        return (control: AbstractControl) => {
          if (control.value || control.value === 0) {
            const parent = parentControl ? parentControl : control.parent;
            if (parent) {
              const matchControl: AbstractControl = parent.controls[field];
              if (
                matchControl &&
                matchControl.errors &&
                matchControl.errors.compare
              ) {
                matchControl.updateValueAndValidity();
              }
              if (!matchControl) {
                throw new Error(
                  `Match Control [${label}] not found on parent control.`
                );
              }
              if (
                matchControl.dirty &&
                !fn(control.value, matchControl.value)
              ) {
                return {
                  compare: {
                    field: label,
                    type,
                  },
                };
              }
            }
          }
        };
      };
    },
  };

  VALIDATION = {
    emptyControl: [],
    name: [
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
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    createPassword: [
      Validators.pattern(PATTERN.passRegex),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    dropdown: [],
    description: [
      Validators.pattern(PATTERN.string),
      Validators.minLength(VALIDATION_CRITERIA.descriptionMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength),
    ],
    feedback: [
      Validators.pattern(PATTERN.string),
      Validators.minLength(3),
      Validators.maxLength(500),
    ],
  };

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  removeSpaces(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, "").length) {
      control.setValue("");
    }
    return null;
  }
  matchPassword(form: AbstractControl) {
    let password = form.get("password").value;
    let confirmPassword = form.get("confirmPassword").value;
    if (password !== confirmPassword) {
      form.get("confirmPassword").setErrors({ matchPassword: true });
    } else {
      if (password === confirmPassword) {
        if (form.get("confirmPassword").errors) {
          delete form.get("confirmPassword").errors["matchPassword"];
          let keys = Object.keys(form.get("confirmPassword").errors);
          if (keys.length === 0) {
            form.get("confirmPassword").setErrors(null);
          }
        }
      }
    }
  }

  getSingleControl(name, required = true, prefilled?) {
    if (prefilled === undefined) {
      prefilled = "";
    }

    const compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return new FormControl(prefilled, Validators.compose(compose));
  }

  // uniqueEmail(form:AbstractControl){
  //   const emailArray
  // }

  getControl(name, required = true, prefilled?) {
    if (prefilled === undefined) {
      prefilled = "";
    }
    let compose = [...this.VALIDATION[name]];

    if (required) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }

    return [prefilled, Validators.compose(compose)];
  }
  getFilterFormControls(keys: string[]) {
    let form = {};
    for (let key of keys) {
      form[key] = [null];
    }
    return form;
  }
}

export const LENGTH_MATCH = (requiredLength: number, unit = 2): ValidatorFn => {
  return (control: AbstractControl) => {
    if (control.value && control.value.length != requiredLength) {
      return {
        lengthMatch: {
          requiredLength,
          unit,
        },
      };
    }
  };
};
