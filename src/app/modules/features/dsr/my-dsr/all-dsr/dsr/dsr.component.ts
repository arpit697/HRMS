import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EDIT } from 'src/app/constants/routes';
import {
  DSR_DETAIL_TABLE_COLUMN,
  DSR_DETAIL_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss'],
})
export class DsrComponent {
  tableColumns: Array<any> = [...DSR_DETAIL_TABLE_COLUMN];
  tableData: Array<any> = [...DSR_DETAIL_TABLE_DATA];

  constructor(private _router: Router) {}

  edit(event: any) {
    this._router.navigate([EDIT.fullUrl, 153]);
  }
}
