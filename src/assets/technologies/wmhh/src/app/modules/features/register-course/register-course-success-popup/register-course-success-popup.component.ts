import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";

@Component({
  selector: "app-register-course-success-popup",
  templateUrl: "./register-course-success-popup.component.html",
  styleUrls: ["./register-course-success-popup.component.scss"],
})
export class RegisterCourseSuccessPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RegisterCourseSuccessPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  goBack() {
    this.dialogRef.close(this.data);
  }
}
