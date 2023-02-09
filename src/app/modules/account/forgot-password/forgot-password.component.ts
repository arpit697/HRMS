import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ACCOUNT, LOGIN } from 'src/app/constants/routes';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword!: FormGroup;
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService
  ) {}
  ngOnInit(): void {
    this.createForm()
  }

  loginBack() {
    this._router.navigate([ACCOUNT.path]);
  }

  createForm() {
    this.forgotPassword = this._formBuilder.group({
      email: [null, [...this._formValidation.VALIDATION.email]],
    });
  }
}
