import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPLOYEE_DATA, EMP_DETAIL } from 'src/app/constants/app.constants';
import {
  INDUSTRIES_DROP_DOWN,
  TECHNICAL_TYPE_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss'],
})
export class AddPitchComponent implements OnInit {
  ideaForm!: FormGroup;
  industries: any;
  technicalTypes: any;
  employeeDetail: any;

  ngOnInit(): void {
    this.employeeDetail = EMP_DETAIL;
    this.industries = INDUSTRIES_DROP_DOWN;
    this.technicalTypes = TECHNICAL_TYPE_DROP_DOWN;
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
    });
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => reader.readAsDataURL(file);
    }
  }

  content: string = '';
  editorConfig = {
    toolbar: [
      { name: 'document', items: ['Print'] },
      { name: 'clipboard', items: ['Undo', 'Redo'] },
      { name: 'styles', items: ['Styles', 'Format'] },
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'],
      },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Outdent',
          'Indent',
          '-',
          'Blockquote',
        ],
      },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'editing', items: ['Scayt'] },
      { name: 'mode', items: ['Source'] },
    ],
  };
  submitHandler() {
    if (this.ideaForm.valid) {
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
