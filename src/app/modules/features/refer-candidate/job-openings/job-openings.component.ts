import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JOBS } from 'src/app/constants/app.constants';
import { JOB_OPENINGS } from 'src/app/constants/routes';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss'],
})
export class JobOpeningsComponent implements OnInit {
  openings!: any;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.openings = JOBS;
  }
}
