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
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '30%',
      height: '80%',
      data: { ...collection_data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
