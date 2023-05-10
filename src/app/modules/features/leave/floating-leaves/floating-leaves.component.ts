import { Component } from '@angular/core';
import {
  FLOATING_LEAVE_TABLE_COLUMN,
  FLOATING_LEAVE_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-floating-leaves',
  templateUrl: './floating-leaves.component.html',
  styleUrls: ['./floating-leaves.component.scss'],
})
export class FloatingLeavesComponent {
  tableColumns: Array<any> = [...FLOATING_LEAVE_TABLE_COLUMN];

  tableData = [...FLOATING_LEAVE_TABLE_DATA];
}
