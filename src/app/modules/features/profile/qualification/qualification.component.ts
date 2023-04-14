import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import {
  EDUCATION_LEVEL_DROP_DOWN,
  LANGUAGE_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { QUALIFICATION_TABLE_COLUMN } from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { EditComponent } from './edit/edit.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  educationLevel: any;
  languages: any;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(Date.now());

  qualificationForm!: FormGroup;
  tableColumns: Array<any> = [...QUALIFICATION_TABLE_COLUMN];
  tableData: Array<any> = [];

  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;

  constructor(
    private _dialog: MatDialog,
    public formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.educationLevel = EDUCATION_LEVEL_DROP_DOWN;
    this.languages = LANGUAGE_DROP_DOWN;
    this.createForm();
  }

  createForm() {
    this.qualificationForm = this.formBuilder.group({
      school_univercity: [null, [...this._formValidation.VALIDATION.required]],
      education_level: [null, [...this._formValidation.VALIDATION.required]],
      date_from: [null, [...this._formValidation.VALIDATION.required]],
      date_to: [null, [...this._formValidation.VALIDATION.required]],
      language: [null, [...this._formValidation.VALIDATION.required]],
      professional_course: [],
      description: [],
    });
  }
  openEditDialog(data?: any): void {
    const isSmallScreen = window.matchMedia('(max-width: 100em)').matches;
    const dialogRef = this._dialog.open(EditComponent, {
      width: isSmallScreen ? '100%' : '40%',
      data: { ...data },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let index = this._utility.findIndexByPropertyValue(
          this.tableData,
          'id',
          result.id
        );
        this.tableData[index] = result;
        this.tableComponent.dataSource.data = this.tableData; // update the data source
      }
    });
  }

  openDeleteDialog(data?: any): void {
    const dialogRef = this._dialog.open(DeleteComponent, {
      data: { ...data },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let index = this._utility.findIndexByPropertyValue(
          this.tableData,
          'id',
          result.id
        );
        this.tableData.splice(index, 1);
        this.tableComponent.dataSource.data = this.tableData; // update the data source
      }
    });
  }
  editDelete(event: any) {
    if (event.click_type == 'edit') {
      this.openEditDialog(event);
    }
    if (event.click_type == 'delete') {
      this.openDeleteDialog(event);
    }
  }

  submitHandler() {
    if (this.qualificationForm.valid) {
      let obj = {
        ...this.qualificationForm.value,
        id: this._utility.generateRandomNumber(),
        first_button_text: 'Edit',
        second_button_text: 'Delete',
        school_university:
          this.qualificationForm.get('school_univercity')?.value,
        time_period: `${this.qualificationForm
          .get('date_from')
          ?.value.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })} - ${this.qualificationForm
          .get('date_to')
          ?.value.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}`,
        education_level: this.qualificationForm.get('education_level')?.value,
      };
      this.tableData.push(obj);
      this._utility.bar(
        'Qualification Update Successfully',
        '',
        'green-snackbar'
      );
      this.tableComponent.dataSource.data = this.tableData; // update the data source
    } else {
      this._utility.bar(
        this._utility.formCheck(this.qualificationForm),
        '',
        'red-snackbar'
      );
    }
  }

  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }
}
