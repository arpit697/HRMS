import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TermsAndConditionsComponent } from '../../includes/utilities/popups/job-detail-t&c/terms-and-conditions.component';
import { JOBS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private dialog: MatDialog) {}
  job: any;
  jobDetail: any;
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      let index = JOBS.findIndex((item) => item.id == params.id);
      this.job = JOBS[index];
      let newJobDetail = [
        { tag: 'Job Title', data: this.job.tech_name },
        { tag: 'Job Type', data: this.job.job_type },
        { tag: 'Department', data: this.job.department },
        { tag: 'Location', data: this.job.location },
        { tag: 'No. of Openings', data: this.job.opening_count },
      ];
      this.jobDetail = newJobDetail;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TermsAndConditionsComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
