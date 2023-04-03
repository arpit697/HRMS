import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from 'src/app/modules/features/freshers/feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-ru-training-card',
  templateUrl: './ru-training-card.component.html',
  styleUrls: ['./ru-training-card.component.scss'],
})
export class RuTrainingCardComponent {
  constructor(private dialog: MatDialog) {}

  feedBackHandler(collection_data: any) {
    const isSmallScreen = window.matchMedia('(max-width: 50em)').matches;

    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: isSmallScreen ? '100%' : '30%',
      height: '98%',
      data: {},
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
