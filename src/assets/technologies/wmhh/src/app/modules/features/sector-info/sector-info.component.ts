import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { UtilityService } from "src/app/services/utility.service";
import { HttpService } from "src/app/services/http.service";
import {
  GET_SECTORS_DETAIL,
  GET_FEATURED_BY_SECTOR,
} from "src/app/constant/urls";
import { PAGE_DATA_TYPE, CONTENT_TYPE } from "src/app/constant/enums";
import { PAGE_OPTIONS_100 } from "src/app/constant/app-constant";
import { environment } from "src/environments/environment";
import { TrainingPopupComponent } from "../../common/components/training-popup/training-popup.component";
import { MatDialog } from "@angular/material/dialog";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-sector-info",
  templateUrl: "./sector-info.component.html",
  styleUrls: ["./sector-info.component.scss"],
})
export class SectorInfoComponent implements OnInit {
  sectorId: string;
  sectorDetail;
  featuredResources;
  total;

  contentType = CONTENT_TYPE;
  quickActivitiesList;
  feedbackFormUrl;
  userLoggedIn = false;
  isBrowser: boolean = false;
  enableChatWidget: boolean = false;
  // dialog: any;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public utilityService: UtilityService,
    private httpService: HttpService,
    @Inject(PLATFORM_ID) private platformId: Object // private localStorage: LocalstorageService
  ) {
    this.userLoggedIn = !!this.utilityService.getAuthToken();
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    } else {
      this.isBrowser = false;
    }
    this.sectorId = this.route.snapshot.paramMap.get("sectorId");
    if (this.sectorId) {
      this.getSectorDetail();
      this.getFeaturedResources();
      // this.getQuickActivitiesListing();
    }
  }

  ngOnInit(): void {
    this.feedbackFormUrl = environment.FEEDBACK_FORM_URL;
  }

  /**
   * Gets sector detail
   */
  async getSectorDetail() {
    try {
      const response = await this.httpService
        .get(GET_SECTORS_DETAIL, { slug: this.sectorId })
        .toPromise();
      if (response.data) {
        this.sectorDetail = response.data;
        this.enableChatWidget = this.sectorDetail.enableChatWidget;
        if (this.sectorDetail.metaTitle && this.sectorDetail.metaTitle.length) {
          this.utilityService.$title.next(
            this.sectorDetail.metaTitle +
              " | BC's Hub for Workplace Mental Health"
          );
        } else {
          // console.log("came");

          this.utilityService.$title.next(null);
        }
        this.quickActivitiesList = [...this.sectorDetail.quiclActivityDatanew];
      }
    } catch (error) {
      console.log("error=>", error);
    }
  }

  /**
   * Gets featured resources
   */
  async getFeaturedResources() {
    try {
      const request = {
        pagedatatype: PAGE_DATA_TYPE.FETUREDPOST,
        sectorSlug: this.sectorId,
        page: 1,
        limit: 3,
      };
      const response = await this.httpService
        .get(GET_FEATURED_BY_SECTOR, { ...request }, { showLoader: false })
        .toPromise();
      if (response.data) {
        if (this.utilityService.getAuthToken()) {
          this.featuredResources = [...response.data.data];
        } else {
          this.featuredResources = [
            ...this.utilityService.checkLikedListContent(response.data.data),
          ];
        }
        this.total = response.data.total;
      }
    } catch (error) {
      console.log("error=>", error);
    }
  }

  async getQuickActivitiesListing() {
    const reqquery = {
      ...PAGE_OPTIONS_100,
      pagedatatype: PAGE_DATA_TYPE.QUICKACTIVITY,
      sectorSlug: this.sectorId,
    };
    const response = await this.httpService
      .get(GET_FEATURED_BY_SECTOR, { ...reqquery })
      .toPromise();
    if (response.data) {
      this.quickActivitiesList = [...response.data.data];
    }
  }
  openTrainingPopup() {
    this.dialog.open(TrainingPopupComponent, {
      width: "820px",
      disableClose: true,
      autoFocus: false,
    });
  }

  openSectorSponsor(sector: any) {
    window.open(sector.logoLink);
  }
}
