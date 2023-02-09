import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { StrapiService } from "src/app/services/strapi.service";
import { MainContentService } from "./main-content.service";
import {
  CONTENT_TYPE,
  PAGE_OPTIONS,
  PAGE_LIMIT_3,
  PAGE_LIMIT_DEFAULT,
  MODULENAMES,
} from "src/app/constant/app-constant";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { RELATED_ARTICLES, MODULE_TYPES } from "src/app/constant/enums";
import { UtilityService } from "src/app/services/utility.service";
import { Subscription } from "rxjs";
import { SwiperConfigInterface, SwiperComponent } from "ngx-swiper-wrapper";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../../account/login/login.component";
import { RegisterPopupComponent } from "../../account/register-popup/register-popup.component";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
})
export class MainContentComponent implements OnInit, AfterViewInit {
  mainContentData;

  seriesData: Array<any> = null;
  parentData: any = null;
  id: string = null;
  pageOptions: any = { ...PAGE_OPTIONS };
  total;
  userLoggedIn = false;

  MODULE_NAME_ENUM = MODULE_TYPES;

  scrollLeftCount: number = 0;
  showScrollRight: boolean = true;

  paramsSubscription = new Subscription();

  relatedArticles = [];

  contentType = CONTENT_TYPE;
  restrictToLoggedInUsers: boolean = false;
  swiperConfig: SwiperConfigInterface;
  @ViewChild("next") next: ElementRef;
  @ViewChild("prev") prev: ElementRef;
  activeIndex;

  constructor(
    private mainContentService: MainContentService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private http: HttpService,
    public utilityService: UtilityService,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.userLoggedIn = !!this.utilityService.getAuthToken();
    this.paramsSubscription = this.actRoute.params.subscribe((event) => {
      this.id = this.actRoute.snapshot.params.id;
      if (this.id) {
        this.getSeriesContent(this.id);
      }
    });
  }
  ngOnInit(): void {}

  async getSeriesContent(id: string) {
    let { data }: { data: any } =
      await this.mainContentService.getSeriesContent(id, this.pageOptions);
    console.log(data);

    if (data.parentData && data.parentData.availForRegisteredUsersOnly) {
      this.restrictToLoggedInUsers = true;
    }
    this.seriesData = [...this.utilityService.checkLikedListContent(data.data)];
    this.parentData = {
      ...this.utilityService.checkLikedContent(data.parentData),
    };
    if (this.parentData.metaTitle && this.parentData.metaTitle.length) {
      this.utilityService.$title.next(this.parentData.metaTitle);
    } else {
      // console.log("came");

      this.utilityService.$title.next(null);
    }
    console.log(this.parentData);

    this.total = data.total;
    this.mainContentData = data && data.length ? data[0].series_category : {};

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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        },
        spaceBetween: 14,
      };
      this.activeIndex = 0;

      this.cdRef.detectChanges();
    }, 0);
    this.getRelatedArticles();
  }

  routeToSubPart(part: any) {
    if (this.parentData.completeInSequence) {
      if (part.isReadable) {
        console.log(part);

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

          case CONTENT_TYPE.EXTERNALLINK:
            window.open(part.externallink);
            break;

          default:
            break;
        }
      } else {
      }
    } else {
      if (this.restrictToLoggedInUsers && !this.utilityService.getAuthToken()) {
        this.openLogin();
      } else {
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
          case CONTENT_TYPE.EXTERNALLINK:
            window.open(part.externallink);
            break;
          default:
            break;
        }
      }
    }
  }
  async getRelatedArticles() {
    const reqQuery = {
      _id: this.parentData._id,
      resfor: RELATED_ARTICLES.PARENTCONTENT,
      ...PAGE_LIMIT_3,
    };

    const respo = await this.mainContentService.getParentRelatedArticles(
      reqQuery
    );
    if (respo.data) {
      this.relatedArticles = [
        ...this.utilityService.checkLikedListContent(respo.data.data),
      ];
    }
  }

  openLogin() {
    this.dialog.open(RegisterPopupComponent, {
      width: "668px",
      disableClose: false,
      autoFocus: false,
      data: {
        heading: "access this resource",
        description:
          "Join for free to get unlimited access to all our resources",
        icon: "assets/images/res_pop.svg",
      },
    });
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

  /**
   * after view init life cycle hook
   */
  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
