import { Component } from '@angular/core';
import { ACCOUNT, PROJECT_DETAIL } from 'src/app/constants/routes';
import {
  PROJECTS_TABLE_COLUMN,
  PROJECTS_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  openAtlassian() {
    window.open('https://www.atlassian.com/', '_blank');
  }
  tableColumns: Array<any> = [...PROJECTS_TABLE_COLUMN];
  tableData = [...PROJECTS_TABLE_DATA];
}
