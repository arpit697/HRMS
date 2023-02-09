import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription, Observable } from "rxjs";
import {
  PAGE_OPTIONS,
  TIME_ARRAY,
  DISCOVER_FILTER_OPTIONS,
  TIME_ARRAY_OBJECT,
  PAGE_OPTIONS_12,
} from "src/app/constant/app-constant";
import { FormService } from "src/app/services/form.service";
import { AccountService } from "../../account/account.service";
import { DiscoverService } from "./discover.service";
import { timer } from "rxjs";
import { fadeInUpAnimation } from "src/animations/fadeInUp.animation";
import { FormUtils } from "src/app/constant/form.util";
import { UtilityService } from "src/app/services/utility.service";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import * as Joi from "joi-browser";
import { switchMap } from "rxjs/operators";
import { DISCOVER, DASHBOARD } from "src/app/constant/routes";
import { ICheckboxNested } from "src/app/models/checkbox-filter.interface";
import { SearchConfig } from "src/app/models/search-autocomplete.interface";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import {
  GoogleAnalyticsEventActions,
  GoogleAnalyticsEventNames,
} from "src/app/constant/enums";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
  animations: [fadeInUpAnimation],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  seriesArray: Array<any> = null;
  goals: ICheckboxNested;
  sectors: ICheckboxNested;
  timeList: ICheckboxNested;
  timeArray: Array<any> = [...TIME_ARRAY_OBJECT];
  filterPageOptions = { ...DISCOVER_FILTER_OPTIONS };
  filterForm: FormGroup;
  total: number = 0;
  selectedCategory: "goalSlug" | "sectorSlug" | "timeduration" = null;
  pageOptions: any = { ...PAGE_OPTIONS_12 };
  nextPageExists: boolean = false;
  filterObj = {
    goalSlug: null,
    sectorSlug: null,
    timeduration: null,
  };
  queryParams;
  sub: Subscription = new Subscription();
  filterSchema: any;

  searchconfig: SearchConfig = {
    suggestion: false,
    placeholder: "Search Items by topic",
    searchid: "_id",
    isResultMessage: true,
    control: new FormControl(),
  };

  isSavedfilters;
  isFirstTimeLoading: boolean = true;

  constructor(
    private discoverService: DiscoverService,
    private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder,
    private formService: FormService,
    private utility: UtilityService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private gaService: GoogleAnalyticsService
  ) {
    this.utility.removeNotFound();
    this.filterForm = this.createFilterForm();
    console.log(this.discoverService.searchText);

    this.createSchema();
    // this.getDiscoverListing();
    this.getGoalsAndSectors();
    // this.subscribeToFormChanges();
    // this.getSavedFilter();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    let { search } = this.filterForm.controls;

    this.discoverService.searchText = search.value;
    this.cookieService.set("searchText", "" + search.value);
  }

  ngOnInit(): void {
    this.utility.$title.next(null);

    this.listenQueryParamChanges();
  }

  /**
   * Creates schema to validate queryparams
   */
  createSchema() {
    this.filterSchema = Joi.object({
      sectorSlug: Joi.array().items(Joi.string()).optional(),
      goalSlug: Joi.array().items(Joi.string()).optional(),
      timeduration: Joi.optional(),
      search: Joi.string().optional(),
      savedFilters: Joi.string().optional(),
    });
  }

  /**
   * Listens query param changes
   */
  listenQueryParamChanges() {
    this.sub.add(
      this.route.queryParams
        .pipe(switchMap((data) => this.validateFilters({ ...data })))
        .subscribe(
          (response) => {
            const cookiesData = this.utility.getResourceCookiesList();
            const mappedData = response["data"].data.map((list) => {
              if (!this.utility.getAuthToken()) {
                if (cookiesData.includes(list.moduleId)) {
                  return { ...list, isLiked: 1 };
                } else {
                  return { ...list };
                }
              } else {
                return { ...list };
              }
            });

            if (this.seriesArray) {
              this.seriesArray = [...this.seriesArray, ...mappedData];
            } else {
              this.seriesArray = [...mappedData];
            }

            this.total = response["data"].total;
            this.nextPageExists = response["data"].next;
          },
          (error) => {
            console.log("error in fetching data");
          }
        )
    );
  }

  /**
   * Validates filters
   * @param queryParams Required query params
   * @returns  list observable
   */
  validateFilters(queryParams) {
    // console.log(queryParams);

    return new Observable((observer) => {
      this.filterForm.reset();
      try {
        let queryParamsPresent: boolean = false;

        this.filterPageOptions = { ...queryParams };

        delete this.filterPageOptions["savedFilters"];

        if (queryParams.sectorSlug) {
          queryParamsPresent = true;
          queryParams.sectorSlug = queryParams.sectorSlug.split(",");
        }

        if (queryParams.goalSlug) {
          queryParamsPresent = true;

          queryParams.goalSlug = queryParams.goalSlug.split(",");
        }

        if (queryParams.timeduration) {
          queryParamsPresent = true;
          console.log(queryParams.timeduration);

          queryParams.timeduration = queryParams.timeduration;
          // LakeFormation
        }

        if (queryParams.savedFilters === "true") {
          this.isFirstTimeLoading = true;
        }
        // console.log(queryParams);

        Joi.validate(
          queryParams,
          this.filterSchema,
          async (err, value: any) => {
            if (err) {
              throw err;
            } else {
              if (
                this.isFirstTimeLoading &&
                queryParams.savedFilters === "true"
              ) {
                // if (this.utility.getAuthToken()) {
                //   const resp = await this.utility.getProfileDetail();
                //   console.log(resp);
                // } else {
                const res = await this.getSavedFilter();
                // console.log(res);

                let validFiters = {};
                for (let key in res) {
                  // console.log(res, "res");
                  console.log(key);

                  if (res[key] && key != "timeduration") {
                    validFiters[key] = res[key].split(",");
                  }
                }
                validFiters["timeduration"] = res["timeduration"];

                this.filterForm.patchValue({ ...validFiters });
                // }
              } else {
                this.filterForm.patchValue({ ...value });
              }

              // this.filterForm.patchValue({ ...value });

              this.goals = { ...this.goals };
              this.sectors = { ...this.sectors };
              this.timeList = { ...this.timeList };

              this.isFirstTimeLoading = false;
              this.fetchDiscoverListing().subscribe(
                (response) => {
                  observer.next(response);
                  observer.complete();
                },
                (error) => {
                  observer.error(error);
                  observer.complete();
                }
              );
            }
          }
        );
      } catch (error) {
        console.log({ error });
        this.router.navigate([DASHBOARD.fullUrl]);
      }
    });
  }

  search(event) {
    console.log(event);

    this.discoverService.searchText = null;
    this.cookieService.delete("searchText");
    let { search } = this.filterForm.controls;
    search.setValue(event);
    console.log(event);
    this.searchconfig.control.setValue(event);
    this.applyFilters();
    this.gaService.eventEmitter({
      eventAction: GoogleAnalyticsEventActions.search,
      eventCategory: null,
      eventLabel: event,
      eventName: GoogleAnalyticsEventNames.search,
    });
  }

  applyFilters(event?, type?: string) {
    this.resetPageOptions();
    this.router.navigate([DISCOVER.fullUrl], {
      relativeTo: this.route.parent,
      queryParams: this.utility.formatData(
        FormUtils.parse({
          ...this.filterForm.value,
          savedFilters: this.isFirstTimeLoading,
        })
      ),
    });
  }

  /**
   * Will handle filter form value changes
   */
  subscribeToFormChanges() {
    // const queryParams = { ...this.filterForm.value };
    // const source = timer(500);
    // this.sub.add(
    //   this.filterForm.valueChanges.subscribe((data) => {
    //     console.log(data);
    //     if (data.goals) {
    //       this.filterPageOptions.goals = data.goals._id;
    //     }
    //     if (data.sectors) {
    //       this.filterPageOptions.sectors = data?.sectors._id;
    //     }
    //     if (data.timeduration) {
    //       this.filterPageOptions.timeduration = data.timeduration;
    //     }
    //     this.resetPageOptions();
    //     this.router.navigate([DISCOVER.fullUrl], {
    //       queryParams:  FormUtils.parse({
    //           ...this.filterForm.value,
    //         })
    //     });
    //     // this.getDiscoverListing();
    //     const subscribe = source.subscribe(
    //       (val) => (this.selectedCategory = null)
    //     );
    //     this.sub.add(subscribe);
    //   })
    // );
  }

  /**
   * Will create a form for filtering discover content list
   * @returns form group instance
   */
  createFilterForm(): FormGroup {
    return this.fb.group({
      goalSlug: this.formService.getControl("dropdown", false, null),
      sectorSlug: this.formService.getControl("dropdown", false, null),
      timeduration: this.formService.getControl("dropdown", false, null),
      search: this.formService.getControl("dropdown", false, null),
    });
  }

  get timeControl() {
    return this.filterForm.controls["timeduration"];
  }

  get goalsControl() {
    return this.filterForm.controls["goalSlug"];
  }

  get sectorsControl() {
    return this.filterForm.controls["sectorSlug"];
  }

  /**
   * Fetchs discover data
   * @returns  fetchLisitng service request
   */
  fetchDiscoverListing() {
    const previousSearch = this.cookieService.get("searchText");
    if (previousSearch && previousSearch != "null") {
      this.filterForm.controls.search.setValue(previousSearch);
      console.log(this.filterForm.value);
      // this.searchconfig.control.setValue(this.discoverService.searchText);

      this.searchconfig = {
        suggestion: false,
        placeholder: "Search Items by topic",
        searchid: "_id",
        isResultMessage: true,
        control: new FormControl(previousSearch),
      };
      console.log(this.searchconfig.control.value);
    }
    const queryParams = { ...this.filterForm.value };
    // console.log(queryParams);

    return this.discoverService.fetchDiscoverListing(
      this.utility.formatData(
        FormUtils.parse({ ...this.pageOptions, ...queryParams })
      )
    );
  }

  /**
   * Will fetch discover content listing
   */
  async getDiscoverListing() {
    let { data } = await this.discoverService.getDiscoverListing(
      FormUtils.parse({ ...this.pageOptions, ...this.filterPageOptions })
    );
    if (this.seriesArray) {
      this.seriesArray = [...this.seriesArray, ...data.data];
    } else {
      this.seriesArray = [...data.data];
    }
    this.total = data.total;
    this.nextPageExists = data.next;
  }

  /**
   * Will handle infinite scroll
   */
  loadMore() {
    if (this.nextPageExists) {
      this.pageOptions.page = this.pageOptions.page + 1;
      this.getDiscoverListing();
    }
  }

  /**
   * Will fetch goals and sectors from strapi
   */
  async getGoalsAndSectors(): Promise<void> {
    try {
      const res = await Promise.all([
        this.accountService.getGoalsListing(),
        this.accountService.getSectorsListing(),
      ]);

      this.goals = {
        control: this.filterForm.controls.goalSlug as FormControl,
        label: "",
        valueKey: "slug",
        viewKey: "goalName",
        data: [],
      };

      this.sectors = {
        control: this.filterForm.controls.sectorSlug as FormControl,
        label: "",
        valueKey: "slug",
        viewKey: "sectorName",
        data: [],
      };

      this.timeList = {
        control: this.filterForm.controls.timeduration as FormControl,
        label: "",
        valueKey: "_id",
        viewKey: "time",
        data: [...this.timeArray],
      };

      this.searchconfig = {
        ...this.searchconfig,
        control: this.filterForm.controls.search as FormControl,
      };

      const previousSearch = this.cookieService.get("searchText");
      if (previousSearch && previousSearch != "null") {
        this.searchconfig.control.setValue(previousSearch);
      }
      const { data: goals } = res[0];
      this.goals.data = [...goals];
      const { data: sectors } = res[1];
      this.sectors.data = [...sectors];
    } catch (error) {
      console.log(error);
    }
  }

  selectFilter(name: "goalSlug" | "sectorSlug" | "timeduration") {
    this.selectedCategory = name;
  }

  /**
   * Will clear filter on dashboard content listing
   */
  async clearFilter() {
    // this.filterPageOptions.goals = null;
    // this.filterPageOptions.sectors = null;
    // this.filterPageOptions.timeduration = null;
    // this.saveUserFilter();

    const filters = { ...this.filterForm.value };

    if (!filters.goalSlug && !filters.sectorSlug && !filters.timeduration) {
      return;
    }

    if (this.utility.getAuthToken()) {
      const payload = {};
      let { message } = await this.discoverService.saveUserFilter(payload);
      this.filterForm.reset();
    } else {
      this.cookieService.delete(environment.FILTER_COOKIE_KEY);
      this.filterObj = { goalSlug: null, sectorSlug: null, timeduration: null };
      this.filterForm.reset();
    }
    this.applyFilters();
  }

  /**
   * Will reset page option to initial values
   */
  resetPageOptions() {
    this.seriesArray = null;
    this.pageOptions = { ...PAGE_OPTIONS };
  }

  /**
   * Will handle click on keep this filter option and will save filter
   */
  async saveUserFilter() {
    if (
      this.filterPageOptions.goalSlug ||
      this.filterPageOptions.sectorSlug
      // ||this.filterPageOptions.timeduration
    ) {
      if (this.utility.getAuthToken()) {
        const payload = {
          goalSlug: this.filterPageOptions.goalSlug,
          sectorSlug: this.filterPageOptions.sectorSlug,
          // timeduration: this.filterPageOptions.timeduration,
        };
        let { message } = await this.discoverService.saveUserFilter(
          FormUtils.parse(payload)
        );
        this.utility.showAlert(message);
      } else {
        const payload = {
          goalSlug: this.filterForm.get("goalSlug").value
            ? this.filterForm.get("goalSlug").value.toString()
            : this.filterForm.get("goalSlug").value,
          sectorSlug: this.filterForm.get("sectorSlug").value
            ? this.filterForm.get("sectorSlug").value.toString()
            : this.filterForm.get("sectorSlug").value,
          // timeduration: this.filterForm.get("timeduration").value,
        };

        let str_obj = JSON.stringify(payload);
        // console.log(str_obj);

        this.cookieService.set(environment.FILTER_COOKIE_KEY, str_obj, 365);
        this.utility.showAlert("Success");
      }
    } else {
      this.utility.showAlert("Please  select a filter to save");
    }
  }

  /**
   * Will get user's last saved filter
   */
  async getSavedFilter() {
    if (this.utility.getAuthToken()) {
      let { data } = await this.discoverService.getUserFilter();
      // console.log(data);

      if (data) {
        // this.filterObj = {...data,timeduration:data.duration}

        if (data.goalsData && data.goalsData.length) {
          let goalSlug = "";
          goalSlug = data.goalsData.map((goal) => goal.slug).join(",");
          // console.log(goalSlug);

          this.filterObj.goalSlug = goalSlug;
        }
        if (data.secotrsData && data.secotrsData.length) {
          let sectorSlug = "";
          sectorSlug = data.secotrsData.map((goal) => goal.slug).join(",");
          // console.log(sectorSlug);
          this.filterObj.sectorSlug = sectorSlug;
        }
        if (data.duration) {
          this.filterObj.timeduration = data.duration;
        }
      }

      return this.filterObj;
      // this.filterForm.patchValue(this.filterObj);
    } else {
      if (this.cookieService.check(environment.FILTER_COOKIE_KEY)) {
        let data = JSON.parse(
          this.cookieService.get(environment.FILTER_COOKIE_KEY)
        );
        if (data) {
          // console.log(data);

          this.filterObj.goalSlug = data.goalSlug;
          this.filterObj.sectorSlug = data.sectorSlug;
          this.filterObj.timeduration = data.timeduration;
        }
      }
      return this.filterObj;

      // this.filterForm.patchValue(this.filterObj);
    }
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  handleKeydown(event, ref) {
    console.log(event);
    console.log(ref);

    if (event.keyCode == 13) {
      console.log("came");
      ref.click();
    }
  }
}
