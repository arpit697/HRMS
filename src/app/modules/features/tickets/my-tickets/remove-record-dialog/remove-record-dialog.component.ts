import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-record-dialog',
  templateUrl: './remove-record-dialog.component.html',
  styleUrls: ['./remove-record-dialog.component.scss'],
})
export class RemoveRecordDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveRecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  confirmationHandler() {
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }
}
