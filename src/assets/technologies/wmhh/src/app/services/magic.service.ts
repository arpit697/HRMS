import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { OAuthExtension } from "@magic-ext/oauth";
import { Magic } from "magic-sdk";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MagicService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  magic_social = new Magic(environment.MAGIC_KEY, {
    extensions: [new OAuthExtension()],
  });
  async loginWithGoogle(): Promise<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.magic_social.oauth.loginWithRedirect({
        provider: "google" /* 'google', 'facebook', 'apple', or 'github' */,
        redirectURI: environment.OAUTH_REDIRECT_URL,
      });
    }
  }

  async loginWithFacebook(): Promise<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.magic_social.oauth.loginWithRedirect({
        provider: "facebook" /* 'google', 'facebook', 'apple', or 'github' */,
        redirectURI: environment.OAUTH_REDIRECT_URL,
      });
    }
  }

  async loginWithMagicLink(email: string): Promise<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.magic_social.auth.loginWithMagicLink({
        email: email,
        // redirectURI: environment.OAUTH_REDIRECT_URL,
      });
    }
  }
}
