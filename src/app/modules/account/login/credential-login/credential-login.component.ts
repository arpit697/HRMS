import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-credential-login',
  templateUrl: './credential-login.component.html',
  styleUrls: ['./credential-login.component.scss'],
})
export class CredentialLoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;

  constructor(
    public utility: UtilityService,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  login() {
    if (this.loginForm.valid) {
      this.utility.bar('login successfull', '', 'green-snackbar');
    } else {
      this.utility.bar('invalid form field', '', 'red-snackbar');
    }
  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      email: [null, [...this._formValidation.VALIDATION.email]],
      password: [null, [...this._formValidation.VALIDATION.password]],
    });
  }
}
