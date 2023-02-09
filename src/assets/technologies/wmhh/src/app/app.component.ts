import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from "@angular/core";
import { LoaderService } from "./services/loader.service";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { GoogleAnalyticsService } from "./services/google-analytics.service";
import { BehaviorSubject } from "rxjs";
import { isPlatformBrowser, TitleCasePipe } from "@angular/common";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  Router,
} from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { UtilityService } from "./services/utility.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "WMHH";
  isLoading: boolean = false;
  routeData: any = null;
  showCookiesPop: boolean = false;
  static isBrowser = new BehaviorSubject<boolean>(null);

  constructor(
    private loaderService: LoaderService,
    private gaService: GoogleAnalyticsService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private titleCase: TitleCasePipe,
    private utilityService: UtilityService
  ) {
    // this.router.events.subscribe((data) => {
    //   console.log(data);
    // });
    this.gaService.init();
    this.loaderService.loader.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    if (this.cookieService.check(environment.ACCEPT_COOKIES)) {
      this.showCookiesPop = false;
    } else {
      this.showCookiesPop = true;
    }
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.setDynamicTitle();
    this.subscribeToTitleChanges();
    this.subscribeToRouteChanges();
  }
  splitAndTitleCase(item: string): string {
    return this.titleCase.transform(
      item
        .split("?")
        .filter((item, idx) => idx == 0)
        .join("")
        .split("-")
        .join(" ")
    );
    // return '';
  }
  ngAfterViewInit() {}

  subscribeToTitleChanges() {
    this.utilityService.$title.subscribe((data) => {
      // console.log(data);
      if (data) {
        // console.log(this.titleCase.transform(data));
        if (
          data ==
          "BC's Hub for Workplace Mental Health - Learn. Train. Inspire."
        ) {
          this.titleService.setTitle(data);
        } else {
          this.titleService.setTitle(this.titleCase.transform(data));
        }
      } else {
        // console.log(this.routeData);

        this.setDynamicTitle(this.routeData);
      }
    });
  }
  subscribeToRouteChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((data: any) => {
        // console.log(data);
        this.routeData = data;
      });
  }
  setDynamicTitle(data: any) {
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((data: any) => {
    //     console.log(data);

    const url: string = data.url;
    let urlArray = url.split("/");
    urlArray = [...urlArray.map((item) => this.splitAndTitleCase(item))];
    // console.log(urlArray);
    let title = "";
    switch (urlArray[1]) {
      case "":
        break;
      case "Resources":
        title = [...urlArray.filter((item, idx) => idx > 1)].join(" | ");

        break;
      case "Resource":
        title = [...urlArray.filter((item, idx) => idx > 2)].join(" | ");

        break;
      case "Sectors":
        title = [...urlArray.filter((item, idx) => idx > 1)].join(" | ");
        title = title + " | BC's Hub for Workplace Mental Health";

        break;
      default:
        title = [...urlArray.filter((item, idx) => idx > 0)].join(" | ");
        title = title + " | BC's Hub for Workplace Mental Health";
        break;
    }
    // console.log(title);
    if (title == "") {
      this.titleService.setTitle(
        "BC's Hub for Workplace Mental Health - Learn. Train. Inspire."
      );
    } else {
      this.titleService.setTitle(title);
    }
    // });
  }

  acceptCookies() {
    this.cookieService.set(environment.ACCEPT_COOKIES, "yes", {
      expires: 365,
      sameSite: "Lax",
    });
    this.showCookiesPop = false;
  }
}
