import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TRAINING_DETAILS_TRAINEE } from 'src/app/constants/routes';
import { FeedbackDialogComponent } from 'src/app/modules/features/freshers/feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-ru-training-card',
  templateUrl: './ru-training-card.component.html',
  styleUrls: ['./ru-training-card.component.scss'],
})
export class RuTrainingCardComponent {
  @Input() id: any;
  @Input() status: any;

  buttonText = 'Enroll Training';
  constructor(private dialog: MatDialog, private _router: Router) {}

  feedBackHandler() {
    const isSmallScreen = window.matchMedia('(max-width: 60em)').matches;

    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: isSmallScreen ? '100%' : '30%',
      height: '98%',
      data: { id: this.id },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
  viewHandler() {
    this._router.navigate([TRAINING_DETAILS_TRAINEE.fullUrl, this.id]);
  }

  enrollHandler() {
    this.buttonText =
      this.buttonText === 'Enroll Training'
        ? 'Cancel Enrollment'
        : 'Enroll Training';
  }
}
