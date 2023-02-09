import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ACTIVITYACTION,
  MODULENAMES,
  PAGE_LIMIT_3,
  PAGE_OPTIONS,
  PAGE_OPTIONS_100,
} from "src/app/constant/app-constant";
import { UtilityService } from "src/app/services/utility.service";
import { ContentTypeService } from "../content-type.service";
import {
  RELATED_ARTICLES,
  CONTENT_TYPE,
  PAGE_DATA_TYPE,
} from "src/app/constant/enums";
import { MatDialog } from "@angular/material/dialog";
import { CongratulationsPopupComponent } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.component";
import { GET_FEATURED_BY_SECTOR } from "src/app/constant/urls";
import { Subscription } from "rxjs";
import { SwiperConfigInterface, SwiperComponent } from "ngx-swiper-wrapper";

@Component({
  selector: "app-content-image",
  templateUrl: "./content-image.component.html",
  styleUrls: ["./content-image.component.scss"],
})
export class ContentImageComponent implements OnInit, AfterViewInit {
  contentId: string = null;
  contentDetails: any = null;
  public MODULE_NAME_ENUM = MODULENAMES;
  parentData;
  userLoggedIn = false;

  relatedArticles = [];
  pageOptions: any = { ...PAGE_OPTIONS };
  nextSeriesData = [];
  scrollLeftCount: number = 0;
  showScrollRight: boolean = true;

  similarQuickActivities = [];

  paramsSubscription = new Subscription();

  swiperConfig: SwiperConfigInterface;
  @ViewChild("next") next: ElementRef;
  @ViewChild("prev") prev: ElementRef;
  swiperConfigSimilarActivies: SwiperConfigInterface;
  @ViewChild("nextSimilar") nextSimilar: ElementRef;
  @ViewChild("prevSimilar") prevSimilar: ElementRef;
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;

  activeIndex;

  contentType = CONTENT_TYPE;

  constructor(
    public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private contentTypeService: ContentTypeService,
    private utility: UtilityService,
    private router: Router,
    public utilityService: UtilityService,
    private cdRef: ChangeDetectorRef
  ) {
    this.userLoggedIn = !!this.utility.getAuthToken();

    this.paramsSubscription = this.actRoute.params.subscribe((event) => {
      this.contentId = this.actRoute.snapshot.params.id;
      if (this.contentId) {
        this.getContentDetails(this.contentId);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  openCongratulations(): void {
    const dialogRef = this.dialog.open(CongratulationsPopupComponent, {
      width: "480px",
      data: this.contentDetails.title,
    });
  }

  async getContentDetails(id: string) {
    try {
      let { data } = await this.contentTypeService.getContentDetails(id);
      this.contentDetails = { ...this.utility.checkLikedContent(data) };
      console.log(this.contentDetails);

      if (
        this.contentDetails.metaTitle &&
        this.contentDetails.metaTitle.length
      ) {
        this.utility.$title.next(this.contentDetails.metaTitle);
      } else {
        console.log("came");

        this.utility.$title.next(null);
      }
      this.contentDetails.completedOn = this.contentDetails.updatedAt;
      this.parentData = data.parentData[0];
      this.contentDetails.postcontent =
        await this.utility.replaceEmbedWithIframe(
          this.contentDetails.postcontent
        );

      if (this.contentDetails.isAvailabelForQuickActivities) {
        this.getSimilarQuickActivities();
      } else {
        this.getRelatedSeriesContent();
      }

      this.getRelatedArticles();

      if (
        !this.contentDetails.isInProgress &&
        !this.contentDetails.isCompleted &&
        this.utility.getAuthToken()
      ) {
        this.markContentInProgress(this.contentDetails._id);
      }

      //hack to scroll to top in mobile
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 0);
    } catch (error) {
      console.log(error);
    }
  }

  async markContentInProgress(contentId: string) {
    const payload = {
      moduleId: contentId,
      moduleName: MODULENAMES.SERIESCONTENT,
      action: ACTIVITYACTION.INPROGRESS,
    };

    await this.contentTypeService.markContentInProgress(payload);
  }

  async toogleContentCompletion() {
    let payload = {};
    // if (this.contentDetails.isCompleted) {
    //   payload = {
    //     moduleId: this.contentDetails._id,
    //     moduleName: MODULENAMES.SERIESCONTENT,
    //     action: ACTIVITYACTION.INPROGRESS,
    //   };
    // } else {
    payload = {
      moduleId: this.contentDetails._id,
      moduleName: MODULENAMES.SERIESCONTENT,
      action: ACTIVITYACTION.COMPLETED,
    };
    // }
    try {
      this.contentDetails.isCompleted = !this.contentDetails.isCompleted;
      let res = await this.contentTypeService.toogleContentCompletion(payload);
      this.contentDetails.completedOn = res.data.updatedAt;
      if (this.contentDetails.isCompleted) {
        this.getRelatedSeriesContent();
        this.openCongratulations();
      }
    } catch (error) {
      this.contentDetails.isCompleted = !this.contentDetails.isCompleted;
    }
  }

  async getRelatedArticles() {
    const reqQuery = {
      _id: this.contentDetails._id,
      resfor: RELATED_ARTICLES.CHILDCONTENT,
      ...PAGE_LIMIT_3,
    };

    const respo = await this.contentTypeService.getChildRelatedArticles(
      reqQuery
    );
    if (respo.data) {
      // console.log(respo);
      if (this.utility.getAuthToken()) {
        this.relatedArticles = [...respo.data.data];
      } else {
        this.relatedArticles = [
          ...this.utilityService.checkLikedListContent(respo.data.data),
        ];
      }
    }
  }

  async getRelatedSeriesContent() {
    if (
      this.contentDetails.parentData &&
      this.contentDetails.parentData.length
    ) {
      const response = await this.contentTypeService.getSeriesContent(
        this.contentDetails.parentData[0].slug,
        this.pageOptions
      );

      if (response.data) {
        this.nextSeriesData = [...response.data.data];
      }
      setTimeout(() => {
        this.swiperConfig = {
          slidesPerView: 4,
          observer: true,
          direction: "horizontal",
          scrollbar: false,
          mousewheel: true,
          initialSlide: 0,
          navigation: {
            nextEl: this.next.nativeElement,
            prevEl: this.prev.nativeElement,
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          },
          spaceBetween: 15,
        };
        const currentResourceIndex = this.nextSeriesData.findIndex(
          (list) => list.moduleId === this.contentDetails.moduleId
        );

        if (currentResourceIndex >= 0) {
          this.activeIndex = currentResourceIndex;
        } else {
          this.activeIndex = 0;
        }

        this.cdRef.detectChanges();
      }, 0);

      // setTimeout(()=>{
      //   // con
      //   if(currentResourceIndex+1 >3){
      //     document.getElementById("web-rec").scrollTo({
      //       top: 0,
      //       left: document.getElementById("web-rec").scrollLeft + (350 * currentResourceIndex+1),
      //       behavior: "smooth",
      //     });
      //     this.scrollLeftCount = (350*(currentResourceIndex))
      //   }

      // },0);
    }
  }

  async getSimilarQuickActivities() {
    const reqquery = {
      ...PAGE_OPTIONS_100,
      pagedatatype: PAGE_DATA_TYPE.QUICKACTIVITY,
    };
    const response = await this.contentTypeService.getSimilarQuick(reqquery);
    if (response.data) {
      if (this.utility.getAuthToken()) {
        this.similarQuickActivities = [...response.data.data];
      } else {
        this.similarQuickActivities = [
          ...this.utilityService.checkLikedListContent(response.data.data),
        ];
      }
      const findIndex = this.similarQuickActivities.findIndex(
        (items) => items.moduleId === this.contentDetails.moduleId
      );
      this.similarQuickActivities.splice(findIndex, 1);
      setTimeout(() => {
        this.swiperConfigSimilarActivies = {
          slidesPerView: 3,
          observer: true,
          direction: "horizontal",
          scrollbar: false,
          mousewheel: true,
          initialSlide: 0,
          navigation: {
            nextEl: this.nextSimilar.nativeElement,
            prevEl: this.prevSimilar.nativeElement,
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          },

          spaceBetween: 15,
        };
        this.activeIndex = 0;
        this.cdRef.detectChanges();
      }, 0);
    }
  }

  scrollLeft() {
    document.getElementById("web-rec").scrollTo({
      top: 0,
      left: document.getElementById("web-rec").scrollLeft - 350,
      behavior: "smooth",
    });
    this.scrollLeftCount = this.scrollLeftCount - 350;
    this.showScrollRight = true;
  }

  scrollRight() {
    document.getElementById("web-rec").scrollTo({
      top: 0,
      left: document.getElementById("web-rec").scrollLeft + 400,
      behavior: "smooth",
    });

    this.scrollLeftCount = this.scrollLeftCount + 400;

    if (
      this.scrollLeftCount >=
      document.getElementById("web-rec").scrollWidth -
        document.getElementById("web-rec").clientWidth
    ) {
      this.showScrollRight = false;
    }
  }

  /**
   * after view init life cycle hook
   */
  ngAfterViewInit(): void {}
}
