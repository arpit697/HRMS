import { Component, OnInit } from "@angular/core";
import { STATIC_CONTENT_CMS } from "src/app/constant/enums";
import { GET_PAGE_CONTENT } from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-terms-and-conditions",
  templateUrl: "./terms-and-conditions.component.html",
  styleUrls: ["./terms-and-conditions.component.scss"],
})
export class TermsAndConditionsComponent implements OnInit {
  cmsData;
  constructor(
    private httpService: HttpService,
    private utility: UtilityService
  ) {
    this.getData();
  }

  ngOnInit(): void {
    this.utility.$title.next(null);
  }

  async getData() {
    const request = {
      pageSlug: STATIC_CONTENT_CMS.TERMS,
    };

    const res = await this.httpService
      .get(GET_PAGE_CONTENT, { ...request })
      .toPromise();
    if (res) {
      this.cmsData = res;
    }
  }
}
