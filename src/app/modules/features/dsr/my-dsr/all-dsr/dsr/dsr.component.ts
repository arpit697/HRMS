import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { EDIT } from 'src/app/constants/routes';
import {
  DSR_DETAIL_TABLE_COLUMN,
  DSR_DETAIL_TABLE_DATA,
  DSR_TABLE_DATA,
} from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss'],
})
export class DsrComponent {
  tableColumns: Array<any> = [...DSR_DETAIL_TABLE_COLUMN];
  tableData: Array<any> = [];
  dsrDetail: any;
  editId: any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.editId = params.id;
      let index = this._dataService.dsrDetail.findIndex(
        (item: any) => item.date == params.id
      );
      if (index >= 0) {
        this.dsrDetail = this._dataService.dsrDetail[index];
        this.tableData.push(this.dsrDetail);
      } else {
      }
    });
  }

  edit(event: any) {
    // window.open(`${EDIT.fullUrl}/${this.editId}`, '_blank');
    this._router.navigate([EDIT.fullUrl, this.editId]);
  }
}
