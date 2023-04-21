import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMP_DETAIL, SIDE_NAV_ITEM } from 'src/app/constants/app.constants';
import {
  INDUSTRIES_DROP_DOWN,
  TECHNICAL_TYPE_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss'],
})
export class AddPitchComponent implements OnInit {
  editorConfig = {
    ...EDITOR_CONFIG,
  };
  ideaForm!: FormGroup;
  industries = INDUSTRIES_DROP_DOWN;
  technicalTypes = TECHNICAL_TYPE_DROP_DOWN;
  employeeDetail = EMP_DETAIL;

  ngOnInit(): void {
    this.createForm();
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}
  createForm() {
    this.ideaForm = this._formBuilder.group({
      name: [{ value: this.employeeDetail.full_name, disabled: true }],
      employee_id: [{ value: this.employeeDetail.employee_id, disabled: true }],
      date_of_birth: [{ value: this.employeeDetail.birthday, disabled: true }],
      pitch_title: [null, [...this._formValidation.VALIDATION.required]],
      industry: [null, [...this._formValidation.VALIDATION.required]],
      type: [null, [...this._formValidation.VALIDATION.required]],
      idea: [null, [...this._formValidation.VALIDATION.required]],
    });
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => reader.readAsDataURL(file);
    }
  }

  submitHandler() {
    if (this.ideaForm.valid) {
      // SIDE_NAV_ITEM[3].categories?.push({
      //   icon: 'lightbulb',
      //   name: 'My Idea',
      //   router_link: 'MY_IDEA',
      //   blank: false,
      // });

      this.utility.bar('Refer candidate successfully', '', 'green-snackbar');
    } else {
      this.utility.bar(
        this.utility.formCheck(this.ideaForm),
        '',
        'red-snackbar'
      );
    }
  }
}
