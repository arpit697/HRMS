import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FEATURES } from 'src/app/constants/routes';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-credential-login',
  templateUrl: './credential-login.component.html',
  styleUrls: ['./credential-login.component.scss'],
})
export class CredentialLoginComponent implements OnInit, AfterViewInit {
  hide = true;
  loginForm!: FormGroup;

  constructor(
    public utility: UtilityService,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _router: Router,
    private rendererFactory: RendererFactory2
  ) {}

  @ViewChild('formField', { read: ElementRef }) formField!: ElementRef;
  ngAfterViewInit(): void {
    // const renderer = this.rendererFactory.createRenderer(null, null);
    // const classList = Array.from(
    //   renderer.selectRootElement(this.formField.nativeElement).classList
    // );
    // console.log(classList);
  }

  ngOnInit(): void {
    this.createForm();
  }
  login() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('login', JSON.stringify(true));
      this.utility.bar('login successfully', '', 'green-snackbar');
      this._router.navigate([FEATURES.path]);
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
