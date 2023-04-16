import { Component, OnInit, ViewChild } from '@angular/core';
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
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss'],
})
export class RequestAssetComponent implements OnInit {
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;
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
    private _utility: UtilityService
  ) {}

  ngOnInit(): void {
    this.crateForm();
  }
  crateForm() {
    this.requestAssetFrom = this._formBuilder.group({
      asset_category: ['', [...this._formValidation.VALIDATION.required]],
      quantity: [
        JSON.stringify(this.quantity[0]),
        [...this._formValidation.VALIDATION.required],
      ],
      priority: [
        this.priority[0],
        [...this._formValidation.VALIDATION.required],
      ],
      required_by: ['', [...this._formValidation.VALIDATION.required]],
      allocation_type: [
        this.allocationType[0],
        [...this._formValidation.VALIDATION.required],
      ],
      request_reason: ['', [...this._formValidation.VALIDATION.required]],
    });
  }

  submitHandler() {
    if (this.requestAssetFrom.valid) {
      let obj: any = {
        ...this.requestAssetFrom.value,
        serial_number: this.tableData.length + 1,
        status: 'Pending',
        request_at: this._utility.getCurrentDate(),
        company: 'Appinventiv',
      };

      this.tableData.push(obj);
      this._utility.bar(
        'Request Asset Update Successfully',
        '',
        'green-snackbar'
      );
      this.tableComponent.dataSource.data = this.tableData; // update the data source
    } else {
      this._utility.bar(
        this._utility.formCheck(this.requestAssetFrom),
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
