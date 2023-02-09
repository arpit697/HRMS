import { Component, OnInit } from "@angular/core";
import { PAGE_OPTIONS, ACTIVITYACTION } from "src/app/constant/app-constant";
import { FormUtils } from "src/app/constant/form.util";
import { AccountService } from "../../account/account.service";

@Component({
  selector: "app-inprogress-resources",
  templateUrl: "./inprogress-resources.component.html",
  styleUrls: ["./inprogress-resources.component.scss"],
})
export class InprogressResourcesComponent implements OnInit {
  seriesArray: Array<any> = null;
  nextPageExists: boolean = false;
  pageOptions: any = { ...PAGE_OPTIONS };

  constructor(private accountService: AccountService) {
    this.getLikedContentListing();
  }

  ngOnInit(): void {}

  async getLikedContentListing() {
    let { data } = await this.accountService.getFullContentListByActivity(
      ACTIVITYACTION.INPROGRESS,
      FormUtils.parse({ ...this.pageOptions })
    );
    // console.log(data);
    if (this.seriesArray) {
      this.seriesArray = [...this.seriesArray, ...data.data];
    } else {
      this.seriesArray = [...data.data];
    }
    this.nextPageExists = data.next;
  }

  /**
   * Will handle infinite scroll
   */
  onScroll() {
    if (this.nextPageExists) {
      this.pageOptions.page = this.pageOptions.page + 1;
      this.getLikedContentListing();
    }
  }
}
