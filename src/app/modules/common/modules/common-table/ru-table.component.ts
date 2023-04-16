import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_SIZE_DROP_DOWN } from 'src/app/constants/drop.down.data';

@Component({
  selector: 'app-ru-table',
  templateUrl: './ru-table.component.html',
  styleUrls: ['./ru-table.component.scss'],
})
export class RuTableComponent<T> implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  Paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('pageSelect') pageSelect!: MatSelect;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @Input() tableColumns: Array<any> = [];
  @Input() tableData: Array<T> = [];
  @Input() isPageable: boolean = false;
  @Input() defaultPaginationSize: number[] = [...PAGE_SIZE_DROP_DOWN];
  @Input() defaultPageSize = this.defaultPaginationSize[0];
  @Output() clickHandler: EventEmitter<any> = new EventEmitter();
  @Input() TableClass!: string;
  @Input() isFilterable: boolean = false;
  displayedColumns: Array<any> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  searchText = '';
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.Paginator;
    this.dataSource.sort = this.sort;
    this.applyFilter();
  }

  applyFilter(keywords?: string[]): void {
    let filterValue = this.searchText.trim().toLowerCase();

    if (keywords && keywords.length > 0) {
      filterValue = keywords
        .map((keyword) => keyword.trim().toLowerCase())
        .filter((keyword) => keyword.length > 0)
        .sort()
        .join(' ');
    }

    this.dataSource.filter = filterValue;
  }

  onPageSizeChanged(pageSize: number) {
    // update the page size of the paginator
    this.Paginator.pageSize = pageSize;
    // update the data source
    this.updateDataSource();
  }

  onPageChanged(event: PageEvent) {
    // update the data source
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource.data = this.tableData;
  }

  bClick(element?: any, id?: any) {
    element = { ...element, click_type: id };
    this.clickHandler.emit(element);
  }
}

// import {
//   AfterViewInit,
//   Component,
//   ElementRef,
//   EventEmitter,
//   Input,
//   OnInit,
//   Output,
//   ViewChild,
// } from '@angular/core';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatSelect } from '@angular/material/select';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { PAGE_SIZE_DROP_DOWN } from 'src/app/constants/drop.down.data';

// @Component({
//   selector: 'app-ru-table',
//   templateUrl: './ru-table.component.html',
//   styleUrls: ['./ru-table.component.scss'],
// })
// export class RuTableComponent<T> implements OnInit, AfterViewInit {
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   @ViewChild('pageSelect') pageSelect!: MatSelect;
//   @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
//   @Input() tableColumns: Array<any> = [];
//   @Input() tableData: Array<T> = [];
//   @Input() isPageable = false;
//   @Input() defaultPaginationSize = [...PAGE_SIZE_DROP_DOWN];
//   @Input() defaultPageSize = this.defaultPaginationSize[0];
//   @Output() clickHandler = new EventEmitter<any>();
//   @Input() TableClass!: string;
//   @Input() isFilterable = false;
//   displayedColumns: Array<any> = [];
//   dataSource: MatTableDataSource<T> = new MatTableDataSource();
//   searchText = '';

//   ngOnInit(): void {
//     this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
//     this.dataSource = new MatTableDataSource(this.tableData);
//   }

//   ngAfterViewInit(): void {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//     this.applyFilter();
//   }

//   applyFilter(): void {
//     const filterValue = this.searchText.trim().toLowerCase();
//     this.dataSource.filter = filterValue;
//     // reset paginator to first page when filtering
//     if (this.paginator) {
//       this.paginator.firstPage();
//     }
//   }

//   onPageSizeChanged(pageSize: number) {
//     // update the page size of the paginator
//     this.paginator.pageSize = pageSize;
//     // update the data source
//     this.updateDataSource();
//   }

//   onPageChanged(event: PageEvent) {
//     // update the data source
//     this.updateDataSource();
//   }

//   updateDataSource() {
//     // get the current page index and page size
//     const pageIndex = this.paginator.pageIndex;
//     const pageSize = this.paginator.pageSize;
//     // slice the data source to get the current page of data
//     const startIndex = pageIndex * pageSize;
//     const endIndex = startIndex + pageSize;
//     const currentPage = this.tableData.slice(startIndex, endIndex);
//     // set the current page of data to the data source
//     this.dataSource.data = currentPage;
//   }

//   handleClick(element: any, id: any) {
//     element = { ...element, click_type: id };
//     this.clickHandler.emit(element);
//   }
// }
