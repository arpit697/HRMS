import { Component } from '@angular/core';
import {
  MY_ASSETS_TABLE_COLUMN,
  MY_ASSETS_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-my-assets-inventory',
  templateUrl: './my-assets-inventory.component.html',
  styleUrls: ['./my-assets-inventory.component.scss'],
})
export class MyAssetsInventoryComponent {
  
  tableColumns: Array<any> = [...MY_ASSETS_TABLE_COLUMN];
  tableData = [...MY_ASSETS_TABLE_DATA];
}
