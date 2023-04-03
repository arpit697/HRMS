import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JOB_OPENINGS } from 'src/app/constants/routes';
import { DataService } from 'src/app/services/data/data.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss'],
})
export class ReferralListComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public utility: UtilityService,
    private _router: Router
  ) {}
  ngOnInit(): void {}

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'candidate_name',
      header: 'Candidate Name',
      cell: (element: Record<string, any>) => `${element['candidate_name']}`,
      type: 'link',
    },
    {
      columnDef: 'candidate_experience',
      header: 'Experience',
      cell: (element: Record<string, any>) =>
        `${element['candidate_experience']}`,
    },
    {
      columnDef: 'department_name',
      header: 'Department',
      cell: (element: Record<string, any>) => `${element['department_name']}`,
    },
    {
      columnDef: 'position_title',
      header: 'Position',
      cell: (element: Record<string, any>) => `${element['position_title']}`,
    },
    {
      columnDef: 'date_of_referral',
      header: 'Date Of Referral',
      cell: (element: Record<string, any>) => `${element['date_of_referral']}`,
    },
    {
      columnDef: 'candidate_status',
      header: 'Candidate Status',
      cell: (element: Record<string, any>) => `${element['candidate_status']}`,
    },
    {
      columnDef: 'action',
      header: 'Resume / CV',
      cell: (element: Record<string, any>) => `${element['action']}`,
      type: 'button-action',
    },
  ];

  tableData = [
    // {
    //   id: 1173,
    //   serial_number: 1,
    //   candidate_name: 'John Doe',
    //   experience: '5 years',
    //   department: 'Marketing',
    //   position: 'Marketing Manager',
    //   date_of_referral: '2022-03-15',
    //   candidate_status: 'Hired',
    //   path: 'CANDIDATE_PROFILE',
    //   button_icon: 'download',
    //   file_url: 'https://example.com/resume/johndoe.pdf',
    //   action: 'Download',
    // },
    ...this.dataService.referredCandidate,
  ];

  jobOpeningClickHandler() {
    this._router.navigate([JOB_OPENINGS.fullUrl]);
  }
}
