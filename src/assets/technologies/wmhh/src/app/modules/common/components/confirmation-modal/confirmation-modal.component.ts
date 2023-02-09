import { Component, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { IPopupResponse, IPopupData } from "../../../../models/popup";
import { POPUP_MESSAGES } from "src/app/constant/messages";

@Component({
  selector: "app-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.scss"],
})
export class ConfirmationModalComponent {
  modalData: IPopupData = {
    message: "",
    confirmButtonText: POPUP_MESSAGES.YES,
    cancelButtonText: POPUP_MESSAGES.NO,
  };
  reason: string;
  responseData: IPopupResponse = {
    note: "",
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IPopupData,
    private dialog: MatDialog
  ) {
    this.modalData = { ...this.modalData, ...this.data };
  }
  onNoClick(): void {
    this.dialog.closeAll();
  }

  confirm() {
       this.dialogRef.close(true);
  }
}
