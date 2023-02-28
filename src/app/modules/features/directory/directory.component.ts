import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { DEPARTMENTS, EMPLOYEE_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit, AfterViewInit {
  selected!: string;
  loading = false;
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
    this.search();
  }

  search() {
    const searchInput = this.searchInput.nativeElement;
    const searchTerm = searchInput.value;

    let filteredData = this.employeeData;
    const selectedDepartment = this.departmentSelect.value;
    if (selectedDepartment !== 'All') {
      filteredData = filteredData.filter(
        (emp) => emp.department === selectedDepartment
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter((emp) => {
        const searchFields = [emp.name, emp.email];
        for (const field of searchFields) {
          if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }

    this.filteredData = filteredData;
  }

  reset() {
    this.searchInput.nativeElement.value = '';
    this.filteredData = this.employeeData;
  }

  ngAfterViewInit(): void {}
}
