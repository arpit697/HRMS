import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UPCOMING_TRAININGS } from 'src/app/constants/routes';
import { RequestTrainingDialogComponent } from './request-training-dialog/request-training-dialog.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss'],
})
export class MyTrainingsComponent {
  constructor(private _router: Router, private dialog: MatDialog) {}

  openDialog(): void {
    const isSmallScreen = window.matchMedia('(max-width: 50em)').matches;
    const dialogRef = this.dialog.open(RequestTrainingDialogComponent, {
      width: isSmallScreen ? '100%' : '40%',
      height: '90%',
      data: {},
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
  routeHandler() {
    this._router.navigate([UPCOMING_TRAININGS.fullUrl]);
  }
}
