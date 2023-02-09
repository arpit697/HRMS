import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
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
import { Subscription } from "rxjs";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-content-audio",
  templateUrl: "./content-audio.component.html",
  styleUrls: ["./content-audio.component.scss"],
})
export class ContentAudioComponent implements OnInit {
  contentId: string = null;
  contentDetails: any = null;
  public MODULE_NAME_ENUM = MODULENAMES;

  relatedArticles = [];
  contentType = CONTENT_TYPE;
  nextSeriesData = [];
  scrollLeftCount: number = 0;
  showScrollRight: boolean = true;
  pageOptions: any = { ...PAGE_OPTIONS };

  similarQuickActivities = [];
  paramsSubscription = new Subscription();
  userLoggedIn = false;

  swiperConfig: SwiperConfigInterface;
  @ViewChild("next") next: ElementRef;
  @ViewChild("prev") prev: ElementRef;
  swiperConfigSimilarActivies: SwiperConfigInterface;
  @ViewChild("nextSimilar") nextSimilar: ElementRef;
  @ViewChild("prevSimilar") prevSimilar: ElementRef;
  activeIndex;
  parentData;
  @ViewChild("videoPlayer") videoPlayer: ElementRef;

  constructor(
    private actRoute: ActivatedRoute,
    private contentTypeService: ContentTypeService,
    public utility: UtilityService,
    private router: Router,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {
    console.log(!!this.utility.getAuthToken());

    if (this.utility.getAuthToken()) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }

    this.paramsSubscription = this.actRoute.params.subscribe((event) => {
      this.contentId = this.actRoute.snapshot.params.id;
      if (this.contentId) {
        this.getContentDetails(this.contentId);
      }
    });
  }

  ngOnInit(): void {}

  async getContentDetails(id: string) {
    try {
      let { data } = await this.contentTypeService.getContentDetails(id);
      this.contentDetails = { ...this.utility.checkLikedContent(data) };
      if (
        this.contentDetails.metaTitle &&
        this.contentDetails.metaTitle.length
      ) {
        this.utility.$title.next(this.contentDetails.metaTitle);
      } else {
        // console.log("came");

        this.utility.$title.next(null);
      }
      this.contentDetails.completedOn = this.contentDetails.updatedAt;
      this.parentData = data.parentData[0];
      // console.log(this.parentData);

      // setTimeout(()=>{
      //   if(this.videoPlayer && this.videoPlayer.nativeElement)
      //   this.videoPlayer.nativeElement.src = ""
      // },0)

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
        this.contentDetails.embeded_url &&
        this.contentDetails.embeded_url.length
      ) {
        this.contentDetails.embeded_url = JSON.parse(
          this.contentDetails.embeded_url
        );
        // let params = new URL(this.contentDetails.embeded_url.url).searchParams;
        // console.log(params);

        // let name = params.get("name");

        // this.contentDetails.embeded_url.url = this.contentDetails.embeded_url.url.replace(
        //   "https://www.youtube.com/watch?v=",
        //   "https://www.youtube.com/embed/"
        // );
        let iframeDiv = document.getElementById("iframe-div");
      }
      if (
        !this.contentDetails.isInProgress &&
        !this.contentDetails.isCompleted &&
        this.utility.getAuthToken()
      ) {
        this.markContentInProgress();
      }
    } catch (error) {
      // console.log(error);
    }
  }

  async markContentInProgress() {
    const payload = {
      moduleId: this.contentDetails._id,
      moduleName: MODULENAMES.SERIESCONTENT,
      action: ACTIVITYACTION.INPROGRESS,
    };

    await this.contentTypeService.markContentInProgress(payload);
  }

  openCongratulations(): void {
    const dialogRef = this.dialog.open(CongratulationsPopupComponent, {
      width: "480px",
      data: this.contentDetails.title,
    });
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
      if (this.utility.getAuthToken()) {
        this.relatedArticles = [...respo.data.data];
      } else {
        this.relatedArticles = [
          ...this.utility.checkLikedListContent(respo.data.data),
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
          slidesPerView: 3,
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
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },

          spaceBetween: 30,
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
          ...this.utility.checkLikedListContent(response.data.data),
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
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },

          spaceBetween: 30,
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
      left: document.getElementById("web-rec").scrollLeft + 350,
      behavior: "smooth",
    });

    this.scrollLeftCount = this.scrollLeftCount + 350;

    if (
      this.scrollLeftCount >=
      document.getElementById("web-rec").scrollWidth -
        document.getElementById("web-rec").clientWidth
    ) {
      this.showScrollRight = false;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
