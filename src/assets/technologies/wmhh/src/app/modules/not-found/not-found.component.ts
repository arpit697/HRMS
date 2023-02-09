import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { SEARCH, DISCOVER } from "src/app/constant/routes";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
})
export class NotFoundComponent implements OnInit {
  show: boolean = true;
  constructor(private router: Router, private utility: UtilityService,private titleService:Title) {
    console.log("came");
    this.titleService.setTitle("Page Not Found")
    if (this.utility.getNotFound()) {
      this.show = false;
    }
  }

  ngOnInit(): void {}
  goBack() {
    this.router.navigate([DISCOVER.fullUrl], {
      queryParams: { savedFilters: true },
    });
  }
}
