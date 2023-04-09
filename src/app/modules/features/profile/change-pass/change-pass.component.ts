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
  realPassword = 'Arpit@7071';
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
      old_password: ['', Validators.required],
      new_password: [null, [...this._formValidation.VALIDATION.createPassword]],
      confirm_password: [null, Validators.required],
    });
  }

  submitHandler() {
    try {
      let oldPassword = this.resetPasswordForm.value.old_password;
      let newPassword = this.resetPasswordForm.value.new_password;
      let confirmPassword = this.resetPasswordForm.value.confirm_password;
  
      if (newPassword === oldPassword) {
        this._utility.bar(
          'New Password Cannot Be the Same as the Old Password',
          '',
          'red-snackbar'
        );
        return;
      }
  
      if (newPassword !== confirmPassword) {
        this._utility.bar(
          'Password and Confirm Password Do Not Match',
          '',
          'red-snackbar'
        );
        return;
      }
  
      if (this.resetPasswordForm.invalid) {
        this._utility.bar(
          this._utility.formCheck(this.resetPasswordForm),
          '',
          'red-snackbar'
        );
        return;
      }
  
      if (oldPassword !== this.realPassword) {
        this._utility.bar('Old Password Is Incorrect', '', 'red-snackbar');
        return;
      }
  
      if (newPassword === this.realPassword && confirmPassword === this.realPassword) {
        this._utility.bar(
          'New Password Cannot Be the Same as the Old Password',
          '',
          'red-snackbar'
        );
        return;
      }
  
      // Perform the password update logic here and reset the form if successful.
  
      this._utility.bar('Password Updated Successfully', '', 'green-snackbar');
      this.resetPasswordForm.reset();
    } catch (error) {
      throw new Error(`Error in submitHandler: ${error}`);
    }
  }
  
}
