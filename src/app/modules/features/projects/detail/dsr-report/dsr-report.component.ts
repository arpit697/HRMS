import { Component } from '@angular/core';

@Component({
  selector: 'app-dsr-report',
  templateUrl: './dsr-report.component.html',
  styleUrls: ['./dsr-report.component.scss'],
})
export class DsrReportComponent {
  filters = [
    { name: 'Date From', formControlName: '', type: 'datePicker' },
    { name: 'Date To', formControlName: '', type: 'datePicker' },
    { name: 'Department', formControlName: '', type: 'select' },
    { name: 'Project Resource', formControlName: '', type: 'select' },
    { name: 'Submission Status', formControlName: '', type: 'select' },
    { name: 'PM Approval Status', formControlName: '', type: 'select' },
    { name: 'AM Approval Status', formControlName: '', type: 'select' },
    { name: 'RM Approval Status', formControlName: '', type: 'select' },
    { name: 'Final Approval Status', formControlName: '', type: 'select' },
    { name: 'Hours', formControlName: '', type: 'select' },
  ];
}
