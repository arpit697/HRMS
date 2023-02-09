import { EventEmitter, Input, Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CONTENT_TYPE, MODULENAMES } from "src/app/constant/app-constant";
import { COURSE_INTRODUCTION } from "src/app/constant/routes";
import { UtilityService } from "src/app/services/utility.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-content-card",
  templateUrl: "./content-card.component.html",
  styleUrls: ["./content-card.component.scss"],
})
export class ContentCardComponent implements OnInit {
  @Input() isDashboardCard: boolean = false;

  @Input() item: any = null;
  public MODULE_NAME_ENUM = MODULENAMES;
  @Output() statusChanged: EventEmitter<any> = new EventEmitter();
  @Output() statusChangedSaved: EventEmitter<any> = new EventEmitter();
  @Input() size: string = "small";
  showModalDetail: boolean = false;
  userLoggedIn = false;
  contentType = CONTENT_TYPE;

  constructor(private router: Router, private utility: UtilityService) {
    this.userLoggedIn = !!this.utility.getAuthToken();
    // console.log(this.userLoggedIn);
  }

  ngOnInit(): void {
    // console.log(this.item);
  }

  goToDetails(item: any) {
    if (item.externallink && item.externallink.length) {
      window.open(item.externallink, "_blank");
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

  statusChangedLike(event) {
    this.statusChanged.emit(event);
  }

  statusChangedOfSaved(event) {
    this.statusChangedSaved.emit(event);
  }

  showModal(state: boolean) {
    this.showModalDetail = state;
  }
}
