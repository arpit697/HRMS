import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ACTIVITYACTION,
  CONTENT_TYPE,
  MODULENAMES,
  PAGE_LIMIT_DEFAULT,
} from "src/app/constant/app-constant";
import { UtilityService } from "src/app/services/utility.service";
import { DashboardService } from "./dashboard.service";
import { MODULE_TYPES } from "src/app/constant/enums";
import { Router } from "@angular/router";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { COURSE_INTRODUCTION } from "src/app/constant/routes";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  likedContentList: Array<any> = null;
  savedContentList: Array<any> = null;
  completedContentList: Array<any> = null;
  inProgressContentList: Array<any> = null;
  savedCoursesList: Array<any> = null;
  profileData: any = null;

  recommendedSources: Array<any> = null;

  contentType = CONTENT_TYPE;
  moduleType = MODULE_TYPES;

  prevBtn = true;
  nextBtn = true;
  @ViewChild("hSlider", { static: false }) componentRef: any;
  currentIndex: any;
  homeConfig: SwiperConfigInterface = {
    observer: true,
    a11y: { enabled: true },

    // observeParents: true,
    // observeSlideChildren: true,
    direction: "horizontal",
    // threshold: 50,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: false,
    grabCursor: false,
    lazy: true,
    initialSlide: 0,
    pagination: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // centeredSlides: true,
    // autoplay: {
    //   delay: 2000,
    // },
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2
    //   },
    //   640: {
    //     slidesPerView: 1
    //   }
    // }
  };

  constructor(
    private dashboardService: DashboardService,
    private utility: UtilityService,
    private router: Router
  ) {
    this.getUserProfile();
    this.getLikedContentList();
    this.getSavedContentList();
    this.getCompletedContentList();
    this.getInProgressContentList();
    this.getSavedCourseList();
    // this.getRecommendedResources();
  }

  ngOnInit(): void {
    this.utility.$title.next(null);
  }

  async getUserProfile(): Promise<void> {
    this.profileData = await this.utility.getProfileDetail();
  }
  async getLikedContentList() {
    try {
      let { data } = await this.dashboardService.getContentListByActivity(
        ACTIVITYACTION.LIKE
      );
      this.likedContentList = [...data.data];
    } catch (error) {}
  }

  async getSavedContentList() {
    try {
      let { data } = await this.dashboardService.getContentListByActivity(
        ACTIVITYACTION.SAVED
      );
      this.savedContentList = [...data.data];
    } catch (error) {}
  }

  async getCompletedContentList() {
    try {
      let { data } = await this.dashboardService.getCompletedCourses();
      this.completedContentList = [...data.data];
    } catch (error) {}
  }

  async getSavedCourseList() {
    try {
      let { data } = await this.dashboardService.getSavedCourses();
      this.savedCoursesList = [...data.data];
    } catch (error) {}
  }

  async getInProgressContentList() {
    try {
      let { data } = await this.dashboardService.getInprogressContent({
        page: 1,
        limit: 4,
      });
      this.inProgressContentList = [...data.data];
    } catch (error) {}
  }

  async getRecommendedResources() {
    try {
      const req = {
        PAGE_LIMIT_DEFAULT,
      };
      let { data } = await this.dashboardService.getRecommenedActivity(req);
      this.recommendedSources = [...data.data];
    } catch (error) {}
  }

  statusChangedLike() {
    this.getLikedContentList();
    this.getInProgressContentList();
    this.getCompletedContentList();
  }

  savedStatusChanged() {
    this.getSavedContentList();
  }

  goToDetails(item: any, inprogress?) {
    console.log(item);
    if (inprogress) {
      this.router.navigate(["/resources", item.parentData[0].slug]);

      return;
    }
    if (item.markedasCourse) {
      this.router.navigate([COURSE_INTRODUCTION.fullUrl, item.slug]);
      return;
    }
    if (MODULENAMES.SERIESCATEGORIES == item.moduleName) {
      this.router.navigate(["/resources", item.slug]);
      return;
    }

    if (MODULENAMES.SERIESCONTENT == item.moduleName) {
      this.routeToSubPart(item);
      return;
    }
  }

  routeToSubPart(part: any) {
    switch (part.contenttype) {
      case CONTENT_TYPE.image:
        this.router.navigate(["/resource/article", part.slug]);
        break;

      case CONTENT_TYPE.audio:
        this.router.navigate(["/resource/audio", part.slug]);
        break;

      case CONTENT_TYPE.video:
        this.router.navigate(["/resource/video", part.slug]);

        break;

      case CONTENT_TYPE.question:
        this.router.navigate(["/resource/quiz", part.slug]);
        break;

      case CONTENT_TYPE.standAlonePage:
        this.router.navigate(["/resource/article", part.slug]);
        break;

      default:
        break;
    }
  }

  /**
   * after view init lifecycle hook
   */
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.componentRef.index = 0;
  //     this.changeSliderIndex();
  //   });
  // }

  /**
   * Slides next
   */
  slideNext() {
    this.componentRef.directiveRef.nextSlide();
  }

  /**
   * Slides prev
   */
  slidePrev() {
    this.componentRef.directiveRef.prevSlide();
  }

  /**
   * Changes slider index
   * @param [event] change event
   */
  changeSliderIndex(event?) {
    if (event) {
      this.currentIndex = event;
    }
    setTimeout(() => {
      this.componentRef.isAtLast
        ? (this.nextBtn = false)
        : (this.nextBtn = true);
      this.componentRef.isAtFirst
        ? (this.prevBtn = false)
        : (this.prevBtn = true);
    });
  }
}
