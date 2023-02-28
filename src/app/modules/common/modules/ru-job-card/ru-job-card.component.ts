import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReferCandidateDialogComponent } from 'src/app/modules/features/refer-candidate/job-openings/refer-candidate-dialog/refer-candidate-dialog.component';

@Component({
  selector: 'app-ru-job-card',
  templateUrl: './ru-job-card.component.html',
  styleUrls: ['./ru-job-card.component.scss'],
})
export class RuJobCardComponent {
  card: any;
  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ReferCandidateDialogComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
