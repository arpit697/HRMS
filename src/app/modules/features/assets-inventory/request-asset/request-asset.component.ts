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
  assetCategories: any;
  quantity: any;
  priority: any;
  allocationType: any;
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
    this.assetCategories = ASSETS_CATEGORIES_DROP_DOWN;
    this.quantity = ASSETS_QUANTITY_DROP_DOWN;
    this.priority = ASSETS_PRIORITY_DROP_DOWN;
    this.allocationType = ALLOCATION_TYPE_DROP_DOWN;
    this.crateForm();
  }
  crateForm() {
    this.requestAssetFrom = this._formBuilder.group({
      categories: [],
      quantity: [],
      priority: [],
      date: [],
      allocation: [],
      reason: [],
    });
  }

  submitHandler() {
    console.log(this.requestAssetFrom.value);
  }
}
