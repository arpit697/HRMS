import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';
import {
  TRAINING_DETAIL_TABLE_COLUMN,
  TRAINING_DETAIL_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent {
  tableData = [...TRAINING_DETAIL_TABLE_DATA];
  tableColumns: Array<any> = [...TRAINING_DETAIL_TABLE_COLUMN];
  details: any;

  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.details = EMPLOYEE_TRAINING_DATA.filter(
        (item) => item.id == params.id
      );
    });
    this.tableData = this.details[0].training_detail;
  }
}
