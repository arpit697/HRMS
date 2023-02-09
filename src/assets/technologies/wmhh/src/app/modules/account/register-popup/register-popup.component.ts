import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: "app-register-popup",
  templateUrl: "./register-popup.component.html",
  styleUrls: ["./register-popup.component.scss"],
})
export class RegisterPopupComponent implements OnInit {
  constructor(
    private registerPopupref: MatDialogRef<RegisterPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      heading: string;
      description: string;
      icon?;
      isCourse?;
    },
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  close() {
    this.registerPopupref.close();
  }

  openLogin() {
    this.registerPopupref.close();
    this.dialog.open(LoginComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }

  openSignUp() {
    this.registerPopupref.close();
    this.dialog.open(SignUpComponent, {
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
