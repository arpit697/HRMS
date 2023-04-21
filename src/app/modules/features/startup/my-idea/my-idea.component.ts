import { Component } from '@angular/core';
import {
  MY_IDEA_TABLE_COLUMN,
  MY_IDEA_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-my-idea',
  templateUrl: './my-idea.component.html',
  styleUrls: ['./my-idea.component.scss'],
})
export class MyIdeaComponent {
  tableColumns = [...MY_IDEA_TABLE_COLUMN];
  tableData = [...MY_IDEA_TABLE_DATA];
}
