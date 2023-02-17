import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';
import { DEPARTMENTS, EMPLOYEE_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit, AfterViewInit {
  selected!: string;
  ngAfterViewInit(): void {
    this.searchFun();
  }
  departments!: string[];
  employeeData: any[] = [];
  filteredData: any[] = [];

  @ViewChild('departmentSelect') departmentSelect!: MatSelect;
  @ViewChild('searchInput') searchInput!: ElementRef;

  ngOnInit(): void {
    this.departments = DEPARTMENTS;
    this.employeeData = EMPLOYEE_DATA;
    this.filteredData = this.employeeData;
    this.selected = 'All';
  }

  onDepartmentSelect() {
    const selectedDepartment = this.departmentSelect.value;
    if (selectedDepartment === 'All') {
      this.filteredData = this.employeeData;
    } else {
      this.filteredData = this.employeeData.filter(
        (emp) => emp.department === selectedDepartment
      );
    }
  }

  searchFun() {
    const searchInput = this.searchInput.nativeElement;
    const searchTerm$ = fromEvent(searchInput, 'input').pipe(
      map((event: any) => event.target.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    searchTerm$.subscribe((searchTerm) => {
      const selectedDepartment = this.departmentSelect.value;
      let filteredData = this.employeeData;

      if (selectedDepartment !== 'All') {
        filteredData = filteredData.filter(
          (emp) => emp.department === selectedDepartment
        );
      }

      filteredData = filteredData.filter((emp) => {
        const searchFields = [emp.name, emp.email];
        for (const field of searchFields) {
          if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

      this.filteredData = filteredData;
    });
  }

  reset() {
    this.searchInput.nativeElement.value = '';
    this.filteredData = this.employeeData;
  }
}
