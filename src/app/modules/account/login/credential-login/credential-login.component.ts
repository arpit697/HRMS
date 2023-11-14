import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import * as AuthActions from '../../../../states/auth/auth.actions';
import * as fromAuth from '../../../../../app/states/auth/auth.reducer';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

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
    private _formValidation: FormValidationService,
    private _store: Store<fromAuth.State>,
    private _http: HttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  login() {
    if (this.loginForm.valid) {
      this._http
        .post('http://localhost:8000/api/user/login', this.loginForm.value)
        .subscribe((response: any) => {
          console.log(response, 'hey i am response');

          this._store.dispatch(AuthActions.loginRequest(response));
        });
    }
  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      email: [null, [...this._formValidation.VALIDATION.email]],
      password: [null, [...this._formValidation.VALIDATION.password]],
    });
  }
}
