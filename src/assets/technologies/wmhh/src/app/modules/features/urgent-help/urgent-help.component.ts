import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { STATIC_CONTENT_CMS } from "src/app/constant/enums";
import { GET_PAGE_CONTENT } from "src/app/constant/urls";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-urgent-help",
  templateUrl: "./urgent-help.component.html",
  styleUrls: ["./urgent-help.component.scss"],
})
export class UrgentHelpComponent implements OnInit {
  urgentHelpContent;

  constructor(
    private httpService: HttpService,
    private utility: UtilityService
  ) {
    this.getUrgentHelpContent();
  }

  ngOnInit(): void {
    this.utility.$title.next(null);
  }

  async getUrgentHelpContent() {
    const request = {
      pageSlug: STATIC_CONTENT_CMS.URGENTHELP,
    };

    const res = await this.httpService
      .get(GET_PAGE_CONTENT, { ...request })
      .toPromise();
    if (res) {
      this.urgentHelpContent = res["pageContent"];
    }
  }
}
