import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DISCOVER } from "src/app/constant/routes";
import { RegisterCoursePopupComponent } from "./register-course-popup/register-course-popup.component";

@Component({
  selector: "app-register-course",
  templateUrl: "./register-course.component.html",
  styleUrls: ["./register-course.component.scss"],
})
export class RegisterCourseComponent implements OnInit {
  slug: string = null;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params.slug;
    this.openDialog();
  }

  openDialog() {
    if (this.slug) {
      const dialogRef = this.dialog.open(RegisterCoursePopupComponent, {
        width: "820px",
        disableClose: true,
        autoFocus: false,
        data: { slug: this.slug },
      });

      dialogRef.afterClosed().subscribe((data) => {
        this.router.navigate([DISCOVER.fullUrl]);
      });
    } else {
      this.router.navigate(["/"]);
    }
  }
}
