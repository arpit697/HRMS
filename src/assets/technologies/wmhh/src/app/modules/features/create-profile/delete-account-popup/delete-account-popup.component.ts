import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-delete-account-popup",
  templateUrl: "./delete-account-popup.component.html",
  styleUrls: ["./delete-account-popup.component.scss"],
})
export class DeleteAccountPopupComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteAccountPopupComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  accept() {
    this.dialogRef.close(true);
  }
}
