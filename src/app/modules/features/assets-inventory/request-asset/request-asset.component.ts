import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ALLOCATION_TYPE_DROP_DOWN,
  ASSETS_CATEGORIES_DROP_DOWN,
  ASSETS_PRIORITY_DROP_DOWN,
  ASSETS_QUANTITY_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import {
  REQUEST_ASSET_TABLE_COLUMN,
  REQUEST_ASSET_TABLE_DATA,
} from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss'],
})
export class RequestAssetComponent implements OnInit {
  tableColumns: Array<any> = [...REQUEST_ASSET_TABLE_COLUMN];
  tableData = [...REQUEST_ASSET_TABLE_DATA];
  requestAssetFrom!: FormGroup;
  assetCategories = ASSETS_CATEGORIES_DROP_DOWN;
  quantity = ASSETS_QUANTITY_DROP_DOWN;
  priority = ASSETS_PRIORITY_DROP_DOWN;
  allocationType = ALLOCATION_TYPE_DROP_DOWN;
  panelOpenState: boolean = false;
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private utility: UtilityService
  ) {}

  ngOnInit(): void {
    this.crateForm();
  }
  crateForm() {
    this.requestAssetFrom = this._formBuilder.group({
      categories: [],
      quantity: [JSON.stringify(this.quantity[0]), []],
      priority: [this.priority[0], []],
      date: [],
      allocation: [this.allocationType[0], []],
      reason: [],
    });
  }

  submitHandler() {
    console.log(this.requestAssetFrom.value);
  }
}
