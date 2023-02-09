import { Component, OnInit, Input } from "@angular/core";
import {
  Network,
  SocialShareService,
} from "../social-share/social-share.service";
import { Location } from "@angular/common";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";
import { Clipboard } from "@angular/cdk/clipboard";
import {
  GoogleAnalyticsEventActions,
  GoogleAnalyticsEventNames,
} from "src/app/constant/enums";
@Component({
  selector: "app-social-share",
  templateUrl: "./social-share.component.html",
  styleUrls: ["./social-share.component.scss"],
})
export class SocialShareComponent implements OnInit {
  @Input() isShareUrl = false;
  @Input() btnText = "";
  @Input() contentType: string = null;

  @Input() contentName: string = null;
  currentUrl;

  /**
   * Creates an instance of social share component.
   * @param socialShare instance of SocialShareService
   */
  constructor(
    private socialShare: SocialShareService,
    private gaService: GoogleAnalyticsService,
    private clipboard: Clipboard
  ) {
    this.currentUrl = window.location.href;
  }

  /**
   * on init life cycle hook
   */
  ngOnInit() {}

  /**
   * copy url
   */
  copyUrl(url: string) {
    this.gaService.eventEmitter({
      eventLabel: this.contentName,
      eventCategory: this.contentType,
      eventName: GoogleAnalyticsEventNames.share,
      eventAction: GoogleAnalyticsEventActions.share_url,
    });
    this.clipboard.copy(url);
  }
  /**
   * Determines whether facebook share on
   */
  onFacebookShare() {
    this.gaService.eventEmitter({
      eventLabel: this.contentName,
      eventCategory: this.contentType,
      eventName: GoogleAnalyticsEventNames.share,
      eventAction: GoogleAnalyticsEventActions.share_fb,
    });
    this.onShareHandler(Network.FACEBOOK);
  }
  /**
   * Determines whether twitter share on
   */
  onTwitterShare() {
    this.gaService.eventEmitter({
      eventLabel: this.contentName,
      eventCategory: this.contentType,
      eventName: GoogleAnalyticsEventNames.share,
      eventAction: GoogleAnalyticsEventActions.share_twitter,
    });
    this.onShareHandler(Network.TWITTER);
  }
  /**
   * Determines whether instagram share on
   */
  onInstagramShare() {
    this.onShareHandler(Network.INSTAGRAM);
  }

  /**
   * Determines whether linked in share on
   */
  onLinkedInShare() {
    this.onShareHandler(Network.LINKEDIN);
  }

  /**
   * Determines whether share handler on
   * @param network network
   */
  onShareHandler(network: Network) {
    if (this.isShareUrl) {
      this.socialShare.share(network);
    }
  }
}
