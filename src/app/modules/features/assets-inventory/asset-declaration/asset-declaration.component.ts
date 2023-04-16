import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  OS_TYPE_DROP_DOWN,
  YES_NO_DROP_DOWN,
} from 'src/app/constants/drop.down.data';
import {
  ASSET_DECLARATION_TABLE_COLUMN,
  ASSET_DECLARATION_TABLE_DATA,
} from 'src/app/constants/table.data';
import { RuTableComponent } from 'src/app/modules/common/modules/common-table/ru-table.component';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss'],
})
export class AssetDeclarationComponent implements OnInit {
  @ViewChild(RuTableComponent) tableComponent!: RuTableComponent<any>;
  tableColumns: Array<any> = [...ASSET_DECLARATION_TABLE_COLUMN];
  tableData = [...ASSET_DECLARATION_TABLE_DATA];
  assetDeclarationForm: any;
  panelOpenState: boolean = false;
  fields = [
    {
      label: 'Employee Id',
      formControlName: 'employee_id',
      type: '',
      placeholder: 'Employee Id',
    },
    {
      label: 'Unique Asset Code',
      formControlName: 'unique_asset_code',
      type: '',
      placeholder: 'Unique Asset Code',
    },
    {
      label: 'Serial Number',
      formControlName: 'asset_serial_number',
      type: '',
      placeholder: 'Serial Number',
    },
    {
      label: 'Model Number',
      formControlName: 'model_number',
      type: '',
      placeholder: 'Model Number',
    },
    {
      label: 'OS',
      formControlName: 'os',
      dorpDown: OS_TYPE_DROP_DOWN,
      type: 'select',
      placeholder: 'OS',
    },
    {
      label: 'OS Version',
      formControlName: 'os_version',
      type: '',
      placeholder: 'OS Version',
    },
    {
      label: 'Brand',
      formControlName: 'brand',
      type: '',
      placeholder: 'Brand',
    },
    {
      label: 'Color',
      formControlName: 'color',
      type: '',
      placeholder: 'Color',
    },
    {
      label: 'Device is in working condition ?',
      formControlName: 'is_working',
      dorpDown: YES_NO_DROP_DOWN,
      type: 'select',
      placeholder: 'Working Condition',
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _dataService: DataService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    // set the table data in the child component
    this.tableComponent.tableData = this.tableData;
  }

  createForm() {
    this.assetDeclarationForm = this._formBuilder.group({
      employee_id: ['AI1558', [...this._formValidation.VALIDATION.required]],
      unique_asset_code: [, [...this._formValidation.VALIDATION.required]],
      asset_serial_number: [, [...this._formValidation.VALIDATION.required]],
      model_number: [, [...this._formValidation.VALIDATION.required]],
      os: [, [...this._formValidation.VALIDATION.required]],
      os_version: [, [...this._formValidation.VALIDATION.required]],
      brand: [, [...this._formValidation.VALIDATION.required]],
      color: [, [...this._formValidation.VALIDATION.required]],
      is_working: [, [...this._formValidation.VALIDATION.required]],
    });
  }
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  submitHandler() {
    if (this.assetDeclarationForm.valid) {
      let obj = {
        ...this.assetDeclarationForm.value,
        serial_number: this.tableData.length + 1,
        images: 'http://example.com/image1.jpg',
        added: this._utility.getCurrentDate(),
      };
      this.tableData.push(obj);
      this.tableComponent.dataSource.data = this.tableData; // update the data source
      this._utility.bar('Asset Declared Successfully', '', 'green-snackbar');
    } else {
      this._utility.bar(
        this._utility.formCheck(this.assetDeclarationForm),
        '',
        'red-snackbar'
      );
    }
  }
}
