import { Injectable } from "@angular/core";

export enum Network {
  TWITTER = "TWITTER",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
}

@Injectable()
export class SocialShareService {
  /**
   * Creates an instance of social share service.
   */
  constructor() {}
  /**
   * Shares social share service
   * @param network network type
   */
  share(network: Network) {
    const url = location.href;
    // open a tweet form
    if (network === Network.TWITTER) {
      window.open(
        `http://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
        "tweet"
      );
    }
    // open a post form
    if (network === Network.FACEBOOK) {
      window.open(
        `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
    // open a post form
    if (network === Network.INSTAGRAM) {
      window.open(
        `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }

    // open a post form
    if (network === Network.LINKEDIN) {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    }
  }
}
