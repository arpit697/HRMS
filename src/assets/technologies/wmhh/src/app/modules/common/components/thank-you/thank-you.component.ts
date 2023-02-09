import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IPopupData } from 'src/app/models/popup';
import { TrainingPopupComponent } from '../training-popup/training-popup.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef < ThankYouComponent > ,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  close(){
    this.dialogRef.close()
  }

  goBack(){
    this.dialogRef.close(this.data);
  }

}
