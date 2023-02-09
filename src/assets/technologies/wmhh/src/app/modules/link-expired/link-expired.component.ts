import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DISCOVER } from "src/app/constant/routes";

@Component({
  selector: "app-link-expired",
  templateUrl: "./link-expired.component.html",
  styleUrls: ["./link-expired.component.scss"],
})
export class LinkExpiredComponent implements OnInit {
  constructor(private router: Router) {
    console.log("came");
  }

  ngOnInit(): void {}
  goBack() {
    this.router.navigate([DISCOVER.fullUrl], {
      queryParams: { savedFilters: true },
    });
  }
}
