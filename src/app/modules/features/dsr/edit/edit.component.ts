import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DSR_PROJECT_DROP_DOWN } from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  editDsrForm!: FormGroup;
  projects: any;
  editorConfig = { ...EDITOR_CONFIG };
  constructor(
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.projects = DSR_PROJECT_DROP_DOWN;
    this.createForm();
  }
  createForm() {
    this.editDsrForm = this._formBuilder.group({
      project_name: [],
      date: [],
      login_hours: [],
      dsr_detail: [],
    });
  }
  submitHandler() {}
}
