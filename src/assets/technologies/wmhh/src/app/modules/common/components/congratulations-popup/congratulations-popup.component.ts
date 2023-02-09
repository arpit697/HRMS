import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-congratulations-popup',
  templateUrl: './congratulations-popup.component.html',
  styleUrls: ['./congratulations-popup.component.scss']
})
export class CongratulationsPopupComponent implements OnInit {


  resourceName:string;

  constructor(
    public dialogRef: MatDialogRef<CongratulationsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any
  ) { }

  ngOnInit(): void {
    this.resourceName = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
