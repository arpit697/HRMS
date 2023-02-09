import { Component, OnInit } from "@angular/core";
import { UtilityService } from "src/app/services/utility.service";
import { LandingPageService } from "../features/landing-page/landing-page.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  aboutUscontent;
  constructor(
    private landingPageService: LandingPageService,
    private utility: UtilityService
  ) {
    this.getAboutUsContent();
  }

  ngOnInit(): void {
    this.utility.$title.next(null);
  }

  async getAboutUsContent() {
    try {
      const res = await this.landingPageService.getAboutUsContent();
      if (res) {
        this.aboutUscontent = res["pageContent"];
      }
    } catch (error) {
      console.log(error);
    }
  }
}
