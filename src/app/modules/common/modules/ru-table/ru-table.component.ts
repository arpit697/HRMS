import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ru-table',
  templateUrl: './ru-table.component.html',
  styleUrls: ['./ru-table.component.scss'],
})
export class RuTableComponent<T> {
  @ViewChild(MatPaginator)
  Paginator!: MatPaginator;

  @Input() tableColumns: Array<any> = [];
  @Input() tableData: Array<T> = [];
  @Input() isPageable: boolean = false;
  @Input() defaultPaginationSize: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.defaultPaginationSize[1];
  @Output() clickHandler: EventEmitter<any> = new EventEmitter();
  @Input() TableClass!: string;
  @Input() isFilterable: boolean = false;
  displayedColumns: Array<any> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.Paginator;
  }

  bClick(element: any) {
    this.clickHandler.emit(element);
  }
}
