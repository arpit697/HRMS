import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  ASSET_DECLARATION_TABLE_COLUMN,
  ASSET_DECLARATION_TABLE_DATA,
} from 'src/app/constants/table.data';
import { DataService } from 'src/app/services/data/data.service';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss'],
})
export class AssetDeclarationComponent implements OnInit {
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
    this.createForm();
  }

  tableColumns: Array<any> = [...ASSET_DECLARATION_TABLE_COLUMN];
  tableData = [...ASSET_DECLARATION_TABLE_DATA];
  assetDeclarationForm: any;
  fields = [
    {
      label: 'Employee Id',
      formControlName: 'employee_id',
      type: '',
      placeholder: '',
    },
    {
      label: 'Unique Asset Code',
      formControlName: 'unique_asset_code',
      type: '',
      placeholder: '',
    },
    {
      label: 'Serial Number',
      formControlName: 'asset_serial_number',
      type: '',
      placeholder: '',
    },
    {
      label: 'Model Number',
      formControlName: 'model_number',
      type: '',
      placeholder: '',
    },
    { label: 'OS', formControlName: 'os', type: '', placeholder: '' },
    {
      label: 'OS Version',
      formControlName: 'os_version',
      type: 'select',
      placeholder: '',
    },
    { label: 'Brand', formControlName: 'brand', type: '', placeholder: '' },
    { label: 'Color', formControlName: 'color', type: '', placeholder: '' },
    {
      label: 'Device is in working condition ?',
      formControlName: 'is_working',
      type: 'select',
      placeholder: '',
    },
  ];

  createForm() {
    this.assetDeclarationForm = this._formBuilder.group({
      employee_id: [],
      unique_asset_code: [],
      asset_serial_number: [],
      model_number: [],
      os: [],
      os_version: [],
      brand: [],
      color: [],
      is_working: [],
    });
  }

  submitHandler() {}
}
