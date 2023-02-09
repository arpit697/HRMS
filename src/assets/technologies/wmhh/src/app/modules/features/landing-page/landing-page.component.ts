import { Component, OnInit } from "@angular/core";
import { UtilityService } from "src/app/services/utility.service";
import { LandingPageService } from "./landing-page.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  sectorsList;
  aboutUscontent;
  introduction;
  constructor(
    private landingPageService: LandingPageService,
    private utilityService: UtilityService
  ) {
    this.getSectorsList();
    this.getAboutUsContent();
    this.getIntroduction();
    this.utilityService.$title.next(
      "BC's Hub for Workplace Mental Health - Learn. Train. Inspire."
    );
  }

  ngOnInit(): void {}
  async getIntroduction() {
    console.log("came");

    try {
      const res: any = await this.landingPageService.getIntroductionContent();

      // console.log("***", res);
      // console.log(res.pageContent);
      this.introduction = res.pageContent;
    } catch (error) {
      console.log(error);
    }
  }
  async getSectorsList() {
    try {
      const res = await this.landingPageService.getSectorsList();
      if (res.data) {
        // console.log("***", res);
        this.sectorsList = res.data;
      }
    } catch (error) {
      console.log(error);
    }
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
