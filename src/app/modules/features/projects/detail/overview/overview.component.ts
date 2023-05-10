import { Component } from '@angular/core';
import {
  PLANNED_TABLE_COLUMN,
  PLANNED_TABLE_DATA,
  TEAM_TABLE_COLUMN,
  TEAM_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  PlannedTableColumns: Array<any> = [...PLANNED_TABLE_COLUMN];

  PlannedTableData: Array<any> = [...PLANNED_TABLE_DATA];

  TeamTableColumns: Array<any> = [...TEAM_TABLE_COLUMN];

  TeamTableData: Array<any> = [...TEAM_TABLE_DATA];
}
