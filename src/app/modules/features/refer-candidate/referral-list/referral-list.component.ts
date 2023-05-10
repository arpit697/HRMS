import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JOB_OPENINGS } from 'src/app/constants/routes';
import {
  REFERRAL_LIST_TABLE_COLUMN,
  REFERRAL_LIST_TABLE_DATA,
} from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss'],
})
export class ReferralListComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public utility: UtilityService,
    private _router: Router
  ) {}
  ngOnInit(): void {}

  tableColumns: Array<any> = [...REFERRAL_LIST_TABLE_COLUMN];

  tableData = [
    ...REFERRAL_LIST_TABLE_DATA,
    ...this.dataService.referredCandidate,
  ];

  jobOpeningClickHandler() {
    this._router.navigate([JOB_OPENINGS.fullUrl]);
  }
}
