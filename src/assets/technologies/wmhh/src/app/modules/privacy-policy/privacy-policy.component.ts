import { Component, OnInit } from "@angular/core";
import { STATIC_CONTENT_CMS } from "src/app/constant/enums";
import { GET_PAGE_CONTENT } from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  styleUrls: ["./privacy-policy.component.scss"],
})
export class PrivacyPolicyComponent implements OnInit {
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
      pageSlug: STATIC_CONTENT_CMS.PRIVACY_POLICY,
    };

    const res = await this.httpService
      .get(GET_PAGE_CONTENT, { ...request })
      .toPromise();
    if (res) {
      this.cmsData = res;
    }
  }
}
