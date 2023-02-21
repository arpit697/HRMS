import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.resetPasswordForm = this.formBuilder.group({
      old_password: [null, Validators.required],
      new_password: [null, [...this._formValidation.VALIDATION.createPassword]],
      confirm_password: [null, Validators.required],
    });
  }

  submitHandler() {
    if (
      this.resetPasswordForm.value.confirm_password ==
      this.resetPasswordForm.value.new_password
    ) {
      if (this.resetPasswordForm.valid) {
        this._utility.bar(
          'password updated successfully',
          '',
          'green-snackbar'
        );
        this.resetPasswordForm.reset();
      } else {
        this._utility.bar('form fields are not valid', '', 'red-snackbar');
      }
    } else {
      this._utility.bar(
        'password and confirm password not match',
        '',
        'red-snackbar'
      );
    }
  }
}
