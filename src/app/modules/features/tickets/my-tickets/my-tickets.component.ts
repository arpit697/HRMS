import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private _formBuilder: FormBuilder,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this._formBuilder.group({
      ticket_code: [],
      priority: [],
      employee: [],
      subject: [],
      department: [],
      categorie: [],
      status: [],
      ticket_detail: [],
    });
  }
  submitHandler() {
    if (this.ticketForm.valid) {
      let obj = {
        ...this.ticketForm.value,
        status: 'Open',
        employee: 'Arpit Dwivedi',
      };
      this.tableData.push(obj);
      this._utility.bar('Leave Applied Successfully', '', 'green-snackbar');
      this.ticketForm.reset();
      this.tableComponent.dataSource.data = this.tableData; // update the data source
    } else {
    }
  }
}
