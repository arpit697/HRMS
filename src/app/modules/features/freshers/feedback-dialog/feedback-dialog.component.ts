import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
})
export class FeedbackDialogComponent implements OnInit {
  detail: any;
  constructor(
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.detail = EMPLOYEE_TRAINING_DATA.find(
      (item) => item.id === this.data?.id
    );
    console.log(this.detail);
  }

  close() {
    this.dialogRef.close();
  }
}
