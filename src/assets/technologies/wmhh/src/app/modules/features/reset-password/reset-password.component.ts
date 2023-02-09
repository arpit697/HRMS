import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ResetPasswordPopupComponent } from "./reset-password-popup/reset-password-popup.component";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  token;
  constructor(private dialog: MatDialog, private actRoute: ActivatedRoute) {
    // this.dialog.open(ResetPasswordPopupComponent, {
    //   disableClose: true,
    //   autoFocus: false,
    //   data: { token: this.actRoute.snapshot.params.authToken },
    // });
    this.token = this.actRoute.snapshot.params.authToken;
  }

  ngOnInit(): void {}
}
