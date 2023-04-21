import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  TICKET_DEPARTMENT_CATEGORY_DROP_DWON,
  TICKET_PRIORITY_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';
import {
  MY_TICKETS_TABLE_COLUMS,
  MY_TICKETS_TABLE_DATA,
} from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { RemoveRecordDialogComponent } from '../../includes/utilities/popups/remove-ticket/remove-record-dialog.component';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { Router } from '@angular/router';
import { TICKET_DETAILS } from 'src/app/constants/routes';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
})
export class MyTicketsComponent implements OnInit {
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;

  tableColumns: Array<any> = [...MY_TICKETS_TABLE_COLUMS];
  editorConfig = { ...EDITOR_CONFIG };
  tableData = [...MY_TICKETS_TABLE_DATA];
  departmantCategories = TICKET_DEPARTMENT_CATEGORY_DROP_DWON;
  priorities = TICKET_PRIORITY_DROP_DOWN;
  ticketForm!: FormGroup;
  content: string = '';
  constructor(
    private _dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _utility: UtilityService,
    private _formValidation: FormValidationService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this._formBuilder.group({
      ticket_code: [, [...this._formValidation.VALIDATION.required]],
      priority: [, [...this._formValidation.VALIDATION.required]],
      employee: [, [...this._formValidation.VALIDATION.required]],
      subject: [, [...this._formValidation.VALIDATION.required]],
      department: [, [...this._formValidation.VALIDATION.required]],
      categorie: [, [...this._formValidation.VALIDATION.required]],
      status: [, [...this._formValidation.VALIDATION.required]],
      ticket_detail: [, [...this._formValidation.VALIDATION.required]],
    });
  }
  submitHandler() {
    if (this.ticketForm.valid) {
      let obj = {
        ...this.ticketForm.value,
        first_button_icon: 'arrow_circle_right',
        second_button_icon: 'delete_forever',
        status: 'Open',
        employee: 'Arpit Dwivedi',
        date: this._utility.getCurrentDate(),
        ticket_code: this._utility.generateRandomNumber(),
      };
      this.tableData.push(obj);
      this._utility.bar('Leave Applied Successfully', '', 'green-snackbar');
      this.ticketForm.reset();
      this.tableComponent.dataSource.data = this.tableData; // update the data source
    } else {
      this._utility.bar(
        this._utility.formCheck(this.ticketForm),
        '',
        'red-snackbar'
      );
    }
  }

  editDelete(event: any) {
    if (event.click_type == 'edit') {
      this._router.navigate([TICKET_DETAILS.fullUrl, 1]);
    }
    if (event.click_type == 'delete') {
      this.deleteRecordDialog(event);
    }
  }

  deleteRecordDialog(data?: any): void {
    const dialogRef = this._dialog.open(RemoveRecordDialogComponent, {
      data: { ...data },
    });
    dialogRef.disableClose = false;
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let index = this._utility.findIndexByPropertyValue(
          this.tableData,
          'ticket_code',
          result.ticket_code
        );

        this.tableData.splice(index, 1);
        this.tableComponent.dataSource.data = this.tableData;
      }
    });
  }
  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }
}
