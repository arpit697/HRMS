import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  JOB_DETAILS,
  JOB_OPENINGS,
  REFER_CANDIDATE,
} from 'src/app/constants/routes';
import { ReferCandidateDialogComponent } from 'src/app/modules/features/refer-candidate/job-openings/refer-candidate-dialog/refer-candidate-dialog.component';

@Component({
  selector: 'app-ru-job-card',
  templateUrl: './ru-job-card.component.html',
  styleUrls: ['./ru-job-card.component.scss'],
})
export class RuJobCardComponent {
  card: any;
  @Input() id: any;
  constructor(private dialog: MatDialog, private _router: Router) {}
  openDialog(): void {
    const isSmallScreen = window.matchMedia('(max-width: 50em)').matches;

    const dialogRef = this.dialog.open(ReferCandidateDialogComponent, {
      width: isSmallScreen ? '100%' : '40%',
      height: '98%',
      data: { id: this.id },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
  viewDetails() {
    this._router.navigate([JOB_DETAILS.fullUrl, this.id]);
  }
}
