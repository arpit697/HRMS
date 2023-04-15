import { Component, OnInit } from '@angular/core';
import {
  REQUESTED_TRAINING_TABLE_COLUMN,
  REQUESTED_TRAINING_TABLE_DATA,
} from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss'],
})
export class RequestedTrainingsComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    if (!(this._dataService.trainingRequest.length == 0)) {
      this.tableData = this._dataService.trainingRequest;
    }
  }

  tableColumns: Array<any> = [...REQUESTED_TRAINING_TABLE_COLUMN];
  tableData: any[] = [...REQUESTED_TRAINING_TABLE_DATA];
}
