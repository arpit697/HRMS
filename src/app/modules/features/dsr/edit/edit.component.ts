import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  dsrDetail: any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      console.log(params);

      let index = this._dataService.dsrDetail.findIndex(
        (item: any) => item.date == params.id
      );
      if (index >= 0) {
        this.dsrDetail = this._dataService.dsrDetail[index];
        console.log(this.dsrDetail);
      } else {
      }
    });
    this.projects = DSR_PROJECT_DROP_DOWN;
    this.createForm();
  }
  createForm() {
    this.editDsrForm = this._formBuilder.group({
      project_name: [
        this.dsrDetail?.project_name,
        [...this._formValidation.VALIDATION.required],
      ],
      date: [
        this.dsrDetail?.date,
        [...this._formValidation.VALIDATION.required],
      ],
      login_hours: [],
      editor_text: [
        this.dsrDetail?.editor_text,
        [...this._formValidation.VALIDATION.required],
      ],
    });
  }
  submitHandler() {
    if (this.editDsrForm.valid) {
      console.log(this.editDsrForm.value);
      this._utility.bar('DSR Updated Successfully', '', 'green-snackbar');
    } else {
      this._utility.bar(
        this._utility.formCheck(this.editDsrForm),
        '',
        'red-snackbar'
      );
    }
  }
}
